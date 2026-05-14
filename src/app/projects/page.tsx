import { Navbar, ProjectCard, Footer } from '@/components';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my recent work and projects showcasing design and development expertise.',
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                index={index}
                link={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
