import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background, experience, and approach to design and development.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a creative professional with over 8 years of experience in design and web development. My journey started with a passion for building beautiful interfaces and has evolved into a deep commitment to understanding user needs.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I believe that great design is invisible—it guides users naturally toward their goals while maintaining an elegant, enjoyable experience. Every project is an opportunity to solve real problems and deliver lasting value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not designing or coding, you'll find me exploring new design trends, contributing to open-source projects, or collaborating with talented teams on innovative ideas.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Design', skills: ['UI/UX Design', 'Figma', 'Prototyping', 'Design Systems'] },
              { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Tools', skills: ['Git', 'Webpack', 'Framer Motion', 'REST APIs'] },
              { title: 'Services', skills: ['Web Design', 'App Development', 'Consulting', 'Mentoring'] },
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
