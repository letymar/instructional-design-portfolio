import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import WorkPageContent from "@/app/components/WorkPageContent";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <WorkPageContent project={project} />;
}
