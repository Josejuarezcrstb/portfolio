import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { getCachedPosts } from "@/utils/mdxCache";
import { MdxPost, MdxPostMetadata } from "@/types/content.types";

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): { metadata: MdxPostMetadata; content: string } {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: MdxPostMetadata = {
    title: (data.title as string) ?? "",
    subtitle: (data.subtitle as string) ?? undefined,
    publishedAt: (data.publishedAt as string) ?? "",
    summary: (data.summary as string) ?? "",
    image: (data.image as string) ?? undefined,
    images: (data.images as string[]) ?? [],
    tag: (data.tag as string) ?? undefined,
    team: (data.team as MdxPostMetadata["team"]) ?? [],
    link: (data.link as string) ?? undefined,
  };

  return { metadata, content };
}

function getMDXData(dir: string): MdxPost[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPostBySlug(slug: string, customPath = ["", "", "", ""]): MdxPost | null {
  const postsDir = path.join(process.cwd(), ...customPath);
  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { metadata, content } = readMDXFile(filePath);
  return { metadata, slug, content };
}

export function getPosts(customPath = ["", "", "", ""]): MdxPost[] {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getCachedPosts(postsDir, () => getMDXData(postsDir));
}
