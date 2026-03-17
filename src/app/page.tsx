import { Navbar, Hero, FeaturedProjects, CTA, Footer } from '@/components';

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'Digital Design System',
      description:
        'A comprehensive design system built for a Fortune 500 tech company. Includes components, patterns, and comprehensive documentation for a unified digital experience across all platforms.',
      tags: ['Design', 'UI/UX', 'System Design'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      href: '#',
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      description:
        'Modern e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout. Built with performance and conversion optimization in mind.',
      tags: ['Development', 'React', 'Commerce'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e2d7c0f0?w=1200&h=600&fit=crop',
      href: '#',
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics dashboard for data visualization and business intelligence. Complex data presented in an intuitive, minimal interface for data-driven decision making.',
      tags: ['Data', 'Dashboard', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      href: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Bold ideas for modern digital."
        cta={{ label: 'View Work', href: '#projects' }}
      />

      {/* Featured Projects */}
      <FeaturedProjects projects={projects} title="Recent Projects" />

      {/* Call to Action Section */}
      <CTA
        title="Ready to build something great?"
        description="Let's collaborate on your next project. Whether you need a complete redesign, a new feature, or strategic guidance, I'm here to help bring your vision to life."
        primaryButton={{ label: 'Get in Touch', href: '/contact' }}
        secondaryButton={{ label: 'Learn More', href: '/about' }}
      />

      <Footer />
    </main>
  );
}

