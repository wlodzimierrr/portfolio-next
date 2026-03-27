import { Navbar, ProjectCard, Footer } from '@/components';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my recent work and projects showcasing design and development expertise.',
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Complete redesign and optimization of an enterprise e-commerce platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&q=80',
    tags: ['Design System', 'UX/UI', 'React'],
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Intuitive dashboard for healthcare practitioners to manage patient data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Web App', 'Next.js', 'Data Viz'],
  },
  {
    title: 'Brand Identity',
    description: 'Comprehensive brand identity system including visual language and components.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['Branding', 'Design', 'Figma'],
  },
  {
    title: 'SaaS Onboarding',
    description: 'Seamless onboarding experience that improved user activation by 35%.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    tags: ['SaaS', 'UX', 'Analytics'],
  },
  {
    title: 'Mobile App',
    description: 'Responsive content platform with offline capabilities and personalization.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    tags: ['Mobile', 'PWA', 'React'],
  },
  {
    title: 'Design Tool',
    description: 'Collaborative design tool with real-time collaboration and plugin system.',
    image: 'https://images.unsplash.com/photo-1517694712208-4c5c0c4f4a3a?w=800&q=80',
    tags: ['Web App', 'Collaboration', 'Canvas'],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} link="#" />
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
            Let's discuss how I can help bring your vision to life.
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
