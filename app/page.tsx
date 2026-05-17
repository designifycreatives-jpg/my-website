'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: 'Business Website', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'}`}>
        <div>
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Designify<span className="text-blue-400">Studio</span></h1>
          <p className={`text-xs tracking-widest ${isScrolled ? 'text-gray-400' : 'text-blue-200'}`}>WEB DESIGN & DEVELOPMENT</p>
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          {['home', 'services', 'portfolio', 'pricing', 'contact'].map((item) => (
            <li key={item} onClick={() => scrollTo(item)} className={`capitalize cursor-pointer hover:text-blue-400 transition ${isScrolled ? 'text-gray-600' : 'text-white'}`}>{item}</li>
          ))}
        </ul>
        <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Get Free Quote
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-40 pb-24 px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 font-medium mb-4 tracking-widest uppercase text-sm animate-pulse">Professional Web Design Agency</p>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            We Build Websites That <span className="text-blue-400">Grow Your Business</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            We craft stunning, high-performance websites that attract clients, build trust, and drive real results for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition hover:scale-105">
              Start Your Project →
            </button>
            <button onClick={() => scrollTo('portfolio')} className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 py-12 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ num: '50+', label: 'Projects Delivered' }, { num: '30+', label: 'Happy Clients' }, { num: '3+', label: 'Years Experience' }, { num: '100%', label: 'Satisfaction Rate' }].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-white">{stat.num}</h3>
              <p className="text-blue-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Everything you need to establish a powerful online presence and grow your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎨', title: 'Web Design', desc: 'Beautiful, modern designs that make your brand stand out and leave a lasting impression.', dark: false },
              { icon: '💻', title: 'Web Development', desc: 'Fast, secure, and scalable websites built with the latest technology for maximum performance.', dark: true },
              { icon: '🔧', title: 'Maintenance', desc: 'Keep your website updated, secure, and running smoothly with our maintenance plans.', dark: false },
              { icon: '📱', title: 'Mobile Responsive', desc: 'Your website will look and work perfectly on all devices — phones, tablets, and desktops.', dark: false },
              { icon: '⚡', title: 'Speed Optimization', desc: 'Lightning fast websites that rank higher on Google and provide better user experience.', dark: false },
              { icon: '🔍', title: 'SEO Setup', desc: 'Get found on Google with proper SEO setup so your clients can find you easily online.', dark: false },
            ].map((service) => (
              <div key={service.title} className={`p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2 ${service.dark ? 'bg-blue-600' : 'bg-white'}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 ${service.dark ? 'bg-blue-500' : 'bg-blue-100'}`}>{service.icon}</div>
                <h4 className={`text-xl font-bold mb-3 ${service.dark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
                <p className={service.dark ? 'text-blue-100' : 'text-gray-500'}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Our Work</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Recent Projects</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">A selection of websites we have designed and developed for our clients.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🍕', title: 'Restaurant Website', color: 'from-orange-400 to-red-500', tag: 'Food & Beverage' },
              { emoji: '💇', title: 'Salon & Spa Website', color: 'from-purple-400 to-pink-500', tag: 'Beauty & Wellness' },
              { emoji: '🏋️', title: 'Gym & Fitness Website', color: 'from-green-400 to-teal-500', tag: 'Health & Fitness' },
              { emoji: '🏥', title: 'Medical Clinic Website', color: 'from-blue-400 to-cyan-500', tag: 'Healthcare' },
              { emoji: '🏠', title: 'Real Estate Website', color: 'from-yellow-400 to-orange-500', tag: 'Real Estate' },
              { emoji: '⚖️', title: 'Law Firm Website', color: 'from-gray-600 to-gray-800', tag: 'Legal Services' },
            ].map((project) => (
              <div key={project.title} className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-2 group">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-5xl group-hover:scale-105 transition`}>{project.emoji}</div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-blue-600 text-sm font-medium">{project.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Transparent Pricing</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Simple Pricing Plans</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Choose the plan that fits your business needs. No hidden fees.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { name: 'Starter', price: '$299', desc: 'Perfect for small businesses', features: ['3 Page Website', 'Mobile Responsive', 'Contact Form', 'Basic SEO'], notIncluded: ['E-commerce'], popular: false },
              { name: 'Professional', price: '$599', desc: 'For growing businesses', features: ['7 Page Website', 'Mobile Responsive', 'Contact Form', 'Advanced SEO', 'Social Media Links'], notIncluded: [], popular: true },
              { name: 'Business', price: '$999', desc: 'For established businesses', features: ['Unlimited Pages', 'Mobile Responsive', 'E-commerce Ready', 'Premium SEO', '3 Month Maintenance'], notIncluded: [], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl shadow transition hover:-translate-y-1 ${plan.popular ? 'bg-blue-600 scale-105' : 'bg-white'}`}>
                {plan.popular && <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>}
                <h4 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-blue-100' : 'text-gray-500'}> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 ${plan.popular ? 'text-white' : 'text-gray-600'}`}><span className="text-green-400">✓</span>{f}</li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className={`flex items-center gap-2 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}><span>✗</span>{f}</li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('contact')} className={`w-full font-bold py-3 rounded-xl transition ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Client Reviews</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { review: 'Designify Studio built us an incredible website. Our online bookings increased by 40% in the first month!', name: 'James Miller', role: 'Restaurant Owner, USA', initials: 'JM' },
              { review: 'Professional, fast, and reliable. They delivered exactly what we needed and more. Highly recommend!', name: 'Sarah Williams', role: 'Salon Owner, UK', initials: 'SW' },
              { review: 'Our new website looks amazing on all devices. The team was responsive and delivered on time!', name: 'Robert Johnson', role: 'Gym Owner, Canada', initials: 'RJ' },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 leading-relaxed mb-6">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">{t.initials}</div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Start Your Project</h3>
          <p className="text-gray-500 text-center mb-12">Tell us about your project and we will get back to you within 24 hours.</p>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h4>
              <p className="text-green-600">Thank you! We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input required type="text" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                <select value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500">
                  <option>Business Website</option>
                  <option>E-commerce Store</option>
                  <option>Portfolio Website</option>
                  <option>Website Maintenance</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Project Details</label>
                <textarea required rows={4} placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition hover:scale-105">
                Send Message →
              </button>
            </form>
          )}
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
                {['Web Design', 'Web Development', 'Website Maintenance', 'SEO Setup'].map((s) => (
                  <li key={s} className="hover:text-white cursor-pointer transition">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 designify.creatives@gmail.com</li>
                <li>💬 WhatsApp: +92 334 2916915</li>
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

      {/* WHATSAPP BUTTON */}
      <a href="https://wa.me/923342916915" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.873L.057 23.943l6.255-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.031-1.378l-.36-.214-3.733.981.998-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.421 0 9.894 4.474 9.894 9.894 0 5.421-4.473 9.894-9.894 9.894z"/>
        </svg>
      </a>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition hover:scale-110">
          ↑
        </button>
      )}

    </main>
  );
}