import Image from 'next/image';
import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'About | Wojciech Bak',
  description:
    'Learn more about my background in data analytics, business intelligence, software engineering, economics, and cloud/platform engineering.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:gap-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                I&apos;m a first-class Business Management and Economics graduate from The Open University,
                focused on building practical technology across data analytics, business intelligence,
                software engineering and cloud/platform engineering.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                My work combines business understanding with hands-on technical skills. I use tools such as
                Python, SQL, PostgreSQL, Stata, Power BI, React, FastAPI, Docker, Kubernetes, and GitHub Actions
                to turn complex problems into clear analysis, dashboards, software systems, and automated platforms.
              </p>

              <p className="text-gray-600 leading-relaxed">
                My projects include an econometric analysis of UK firm profitability, a UFC analytics and
                prediction dashboard, a building products comparison platform, and a self-hosted Kubernetes
                GitOps homelab running on physical hardware. I&apos;m particularly interested in roles where
                data, software, business insight, and infrastructure come together to solve real-world problems.
              </p>
            </div>

            <div className="w-full max-w-sm justify-self-center rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:justify-self-end">
              <Image
                src="/roadmap.png"
                alt="Wojciech Bak"
                width={900}
                height={500}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data & Business Intelligence',
                skills: [
                  'Power BI',
                  'SQL',
                  'PostgreSQL',
                  'Data Cleaning',
                  'Dashboarding',
                  'KPI Reporting',
                ],
              },
              {
                title: 'Statistics & Economics',
                skills: [
                  'Econometrics',
                  'Regression Analysis',
                  'Hypothesis Testing',
                  'Stata',
                  'Python',
                  'Business Strategy',
                ],
              },
              {
                title: 'Software Engineering',
                skills: [
                  'React',
                  'Next.js',
                  'TypeScript',
                  'FastAPI',
                  'Node.js',
                  'Git & GitHub',
                ],
              },
              {
                title: 'Cloud & DevOps',
                skills: [
                  'Docker',
                  'Kubernetes/k3s',
                  'Argo CD',
                  'Terraform',
                  'Ansible',
                  'Prometheus & Loki',
                ],
              },
            ].map((category) => (
              <div key={category.title} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
