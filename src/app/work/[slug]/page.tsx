import { redirect } from "next/navigation";

export default async function ProjectSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;
  const slugPath = Array.isArray(resolvedParams.slug) ? resolvedParams.slug.join("/") : resolvedParams.slug || "";
  redirect(`/work/projects/${slugPath}`);
}
