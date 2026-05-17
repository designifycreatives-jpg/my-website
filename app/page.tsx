export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Designify<span className="text-blue-600">Studio</span></h1>
          <p className="text-xs text-gray-400 tracking-widest">WEB DESIGN & DEVELOPMENT</p>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Services</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Portfolio</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Get Free Quote
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 font-medium mb-4 tracking-widest uppercase text-sm">Professional Web Design Agency</p>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            We Build Websites That <span className="text-blue-400">Grow Your Business</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            We craft stunning, high-performance websites that attract clients, build trust, and drive real results for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition">
              Start Your Project →
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 py-12 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-white">50+</h3>
            <p className="text-blue-100 mt-1">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white">30+</h3>
            <p className="text-blue-100 mt-1">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white">3+</h3>
            <p className="text-blue-100 mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="text-blue-100 mt-1">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Everything you need to establish a powerful online presence and grow your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🎨</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Web Design</h4>
              <p className="text-gray-500 leading-relaxed">Beautiful, modern designs that make your brand stand out and leave a lasting impression.</p>
            </div>
            <div className="bg-blue-600 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6">💻</div>
              <h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
              <p className="text-blue-100 leading-relaxed">Fast, secure, and scalable websites built with the latest technology for maximum performance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🔧</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h4>
              <p className="text-gray-500 leading-relaxed">Keep your website updated, secure, and running smoothly with our maintenance plans.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">📱</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Mobile Responsive</h4>
              <p className="text-gray-500 leading-relaxed">Your website will look and work perfectly on all devices — phones, tablets, and desktops.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">⚡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Speed Optimization</h4>
              <p className="text-gray-500 leading-relaxed">Lightning fast websites that rank higher on Google and provide better user experience.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🔍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">SEO Setup</h4>
              <p className="text-gray-500 leading-relaxed">Get found on Google with proper SEO setup so your clients can find you easily online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Our Work</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Recent Projects</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">A selection of websites we have designed and developed for our clients.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">🍕</div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-1">Restaurant Website</h4>
                <p className="text-gray-500 text-sm">Web Design & Development</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl">💇</div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-1">Salon & Spa Website</h4>
                <p className="text-gray-500 text-sm">Web Design & Development</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl">🏋️</div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-1">Gym & Fitness Website</h4>
                <p className="text-gray-500 text-sm">Web Design & Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Transparent Pricing</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Simple Pricing Plans</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Choose the plan that fits your business needs. No hidden fees.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Starter</h4>
              <p className="text-gray-500 text-sm mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-500"> / one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> 3 Page Website</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Mobile Responsive</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Contact Form</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Basic SEO</li>
                <li className="flex items-center gap-2 text-gray-400"><span>✗</span> E-commerce</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                Get Started
              </button>
            </div>
            <div className="bg-blue-600 p-8 rounded-2xl shadow-xl scale-105">
              <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>
              <h4 className="text-lg font-bold text-white mb-2">Professional</h4>
              <p className="text-blue-100 text-sm mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$599</span>
                <span className="text-blue-100"> / one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white"><span className="text-green-300">✓</span> 7 Page Website</li>
                <li className="flex items-center gap-2 text-white"><span className="text-green-300">✓</span> Mobile Responsive</li>
                <li className="flex items-center gap-2 text-white"><span className="text-green-300">✓</span> Contact Form</li>
                <li className="flex items-center gap-2 text-white"><span className="text-green-300">✓</span> Advanced SEO</li>
                <li className="flex items-center gap-2 text-white"><span className="text-green-300">✓</span> Social Media Links</li>
              </ul>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Business</h4>
              <p className="text-gray-500 text-sm mb-6">For established businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$999</span>
                <span className="text-gray-500"> / one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Unlimited Pages</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Mobile Responsive</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> E-commerce Ready</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Premium SEO</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> 3 Month Maintenance</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Client Reviews</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed mb-6">"Designify Studio built us an incredible website. Our online bookings increased by 40% in the first month!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">JM</div>
                <div>
                  <p className="font-bold text-gray-900">James Miller</p>
                  <p className="text-gray-500 text-sm">Restaurant Owner, USA</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed mb-6">"Professional, fast, and reliable. They delivered exactly what we needed and more. Highly recommend!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">SW</div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Williams</p>
                  <p className="text-gray-500 text-sm">Salon Owner, UK</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed mb-6">"Our new website looks amazing on all devices. The team was responsive and delivered on time!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">RJ</div>
                <div>
                  <p className="font-bold text-gray-900">Robert Johnson</p>
                  <p className="text-gray-500 text-sm">Gym Owner, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Start Your Project</h3>
          <p className="text-gray-500 text-center mb-12">Tell us about your project and we will get back to you within 24 hours.</p>
          <div className="bg-white p-8 rounded-2xl shadow">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input type="text" placeholder="John Smith" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Project Type</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500">
                <option>Business Website</option>
                <option>E-commerce Store</option>
                <option>Portfolio Website</option>
                <option>Website Maintenance</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Project Details</label>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Designify<span className="text-blue-400">Studio</span></h2>
              <p className="text-gray-400 leading-relaxed">Professional web design and development agency helping businesses grow online.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition">Web Design</li>
                <li className="hover:text-white cursor-pointer transition">Web Development</li>
                <li className="hover:text-white cursor-pointer transition">Website Maintenance</li>
                <li className="hover:text-white cursor-pointer transition">SEO Setup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 designify.creatives@gmail.com</li>
                <li>🌍 Available Worldwide</li>
                <li>⏰ Response within 24 hours</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2024 DesignifyStudio. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}