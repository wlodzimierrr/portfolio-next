import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch to discuss your next project or collaboration opportunity.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Me a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Let's Connect</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Follow</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Twitter', href: '#' },
                      { label: 'LinkedIn', href: '#' },
                      { label: 'GitHub', href: '#' },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    San Francisco, CA<br />
                    Available for remote projects worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
