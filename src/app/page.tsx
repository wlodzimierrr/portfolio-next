import { Navbar, Hero, FeaturedProjects, CTA, Footer } from '@/components';

export default function Home() {
const projects = [
  {
    id: '1',
    title: 'UK Firm Profitability Analysis',
    description:
      'Econometric analysis of UK firm profitability using Python and Stata, with regression modelling, diagnostics, and business-focused insights.',
    tags: ['Python', 'Stata', 'Econometrics', 'Data Analysis'],
    image: '/analysis.png',
    href: 'https://github.com/wlodzimierrr/econometrics',
  },
  {
    id: '2',
    title: 'UFC Analytics & Prediction Dashboard',
    description:
      'End-to-end UFC analytics project with data pipelines, machine learning models, and Power BI dashboards for predictions and performance insights.',
    tags: ['Python', 'PostgreSQL', 'Machine Learning', 'Power BI'],
    image: '/ufc.png',
    href: 'https://github.com/wlodzimierrr/ufc-predictor',
  },
  {
    id: '3',
    title: 'Kubernetes GitOps Homelab Platform',
    description:
      'Self-hosted Kubernetes homelab with GitOps deployment, network segmentation, observability, and a custom FastAPI/React portal.',
    tags: ['Kubernetes', 'GitOps', 'DevOps', 'React', 'FastAPI'],
    image: '/homelab.png',
    href: 'https://github.com/wlodzimierrr/homelab-infra',
  }
];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title={<>Building strength through data, <br />code  & systems.</>}
        showImage
        cta={{ label: 'View Work', href: 'projects' }}
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

