import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, Navbar } from '@/components';
import { projects } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Portfolio',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to projects
          </Link>

          <div className="mb-10 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              {project.title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
