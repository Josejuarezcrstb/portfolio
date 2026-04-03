import fs from "fs";
import path from "path";
import { MdxPost, MdxPostMetadata } from "@/types/content.types";

const diskCachePath = path.join(process.cwd(), ".next", "mdx-cache.json");

type MdxDiskEntry = {
  mtimeMs: number;
  metadata: MdxPostMetadata;
  content: string;
  slug: string;
};

type MdxDiskCache = Record<string, MdxDiskEntry>;

let inMemoryCache = new Map<string, MdxPost[]>();

function loadDiskCache(): MdxDiskCache {
  try {
    if (fs.existsSync(diskCachePath)) {
      const raw = fs.readFileSync(diskCachePath, "utf-8");
      return JSON.parse(raw) as MdxDiskCache;
    }
  } catch {
    // proceed with empty cache if invalid or non-existent
  }
  return {};
}

function saveDiskCache(cache: MdxDiskCache) {
  try {
    const dir = path.dirname(diskCachePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(diskCachePath, JSON.stringify(cache), "utf-8");
  } catch {
    // best effort
  }
}

function getCacheKey(filePath: string): string {
  return path.resolve(filePath);
}

export function getCachedPosts(directory: string, loader: () => MdxPost[]): MdxPost[] {
  if (process.env.NODE_ENV !== "production") {
    const posts = loader();
    inMemoryCache.set(directory, posts);
    return posts;
  }

  if (inMemoryCache.has(directory)) {
    return inMemoryCache.get(directory)!;
  }

  const diskCache = loadDiskCache();
  const mdxFiles = fs.existsSync(directory)
    ? fs.readdirSync(directory).filter((file) => path.extname(file) === ".mdx")
    : [];

  const allFresh = mdxFiles.every((file) => {
    const filePath = path.join(directory, file);
    const key = getCacheKey(filePath);
    const entry = diskCache[key];
    if (!entry) return false;
    const stats = fs.statSync(filePath);
    return entry.mtimeMs === stats.mtimeMs;
  });

  if (allFresh && mdxFiles.length > 0) {
    const posts = mdxFiles
      .map((file) => {
        const key = getCacheKey(path.join(directory, file));
        const entry = diskCache[key];
        if (!entry) return undefined;

        return {
          metadata: entry.metadata,
          content: entry.content,
          slug: entry.slug,
        };
      })
      .filter((item): item is MdxPost => Boolean(item));

    inMemoryCache.set(directory, posts);
    return posts;
  }

  const computed = loader();
  inMemoryCache.set(directory, computed);

  const newCache: MdxDiskCache = { ...diskCache };
  computed.forEach((post) => {
    const filePath = path.join(directory, `${post.slug}.mdx`);
    const stats = fs.existsSync(filePath) ? fs.statSync(filePath) : undefined;
    if (stats) {
      newCache[getCacheKey(filePath)] = {
        mtimeMs: stats.mtimeMs,
        metadata: post.metadata,
        content: post.content,
        slug: post.slug,
      };
    }
  });

  saveDiskCache(newCache);
  return computed;
}
