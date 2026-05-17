export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Services</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Hire Me
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <p className="text-blue-200 font-medium mb-4 tracking-widest uppercase text-sm">Welcome to my portfolio</p>
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          I Build Beautiful<br/>Modern Websites
        </h2>
        <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
          Professional web developer helping businesses grow online with stunning, fast, and responsive websites.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition">
            View My Work
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-500 mt-1">Projects Done</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">30+</h3>
            <p className="text-gray-500 mt-1">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">3+</h3>
            <p className="text-gray-500 mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-500 mt-1">Satisfaction</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-8 bg-gray-50">
        <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">What I Offer</p>
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">My Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Web Design</h4>
            <p className="text-gray-500 leading-relaxed">Beautiful and modern designs that make your brand stand out from the competition.</p>
          </div>
          <div className="bg-blue-600 p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-4xl mb-4">💻</div>
            <h4 className="text-xl font-bold text-white mb-3">Development</h4>
            <p className="text-blue-100 leading-relaxed">Fast and responsive websites built with the latest technology like Next.js.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Mobile Friendly</h4>
            <p className="text-gray-500 leading-relaxed">Your website will look perfect on all devices and screen sizes.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center text-8xl flex-shrink-0">
            👨‍💻
          </div>
          <div>
            <p className="text-blue-600 font-medium uppercase tracking-widest text-sm mb-2">About Me</p>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Hi, I am a Web Developer</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              I am a passionate web developer with experience building modern websites and web applications. I love turning ideas into reality through clean code and beautiful design.
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm">Next.js</div>
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm">Tailwind CSS</div>
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm">React</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-8 bg-gray-50">
        <p className="text-blue-600 font-medium text-center uppercase tracking-widest text-sm mb-2">Get In Touch</p>
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h3>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" placeholder="Enter your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea rows={4} placeholder="Write your message..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-8 text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">MyWebsite</h2>
        <p className="text-gray-400 mb-6">Building beautiful websites for the modern web.</p>
        <div className="flex justify-center gap-8 text-gray-400 mb-8">
          <span className="hover:text-white cursor-pointer transition">Home</span>
          <span className="hover:text-white cursor-pointer transition">Services</span>
          <span className="hover:text-white cursor-pointer transition">About</span>
          <span className="hover:text-white cursor-pointer transition">Contact</span>
        </div>
        <p className="text-gray-600 text-sm">© 2024 MyWebsite. All rights reserved.</p>
      </footer>

    </main>
  );
}