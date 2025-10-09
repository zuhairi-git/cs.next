'use client';

import Link from "next/link";
import { useState } from "react";
import { FaRocket, FaCheck, FaHeart, FaLightbulb, FaBolt, FaStar } from 'react-icons/fa';

export default function HowItWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gradient">
                CoreScene
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium">
                About
              </Link>
              <Link href="/how-it-works" className="text-[#6366f1] font-semibold">
                How it works?
              </Link>
              <Link href="/#contact" className="bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-[#6366f1] font-medium">Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#6366f1] font-medium">About</Link>
              <Link href="/how-it-works" className="block text-[#6366f1] font-semibold">How it works?</Link>
              <Link href="/#contact" className="block bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-3 rounded-full font-semibold text-center">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 text-white w-full">
          <div className="inline-block mb-8 px-8 py-3 bg-white/20 backdrop-blur-md rounded-full animate-float">
            <span className="font-bold flex items-center justify-center gap-3 text-lg">
              <FaRocket className="text-2xl" /> Simple, Bold, Beautiful
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-tight">
            How it <span className="block mt-2">WORKS</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-16 max-w-5xl mx-auto leading-tight opacity-95">
            Three simple steps to your dream website
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 font-black">01</div>
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-bold mb-2">€1400+</div>
              <div className="text-lg font-medium opacity-90">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 font-black">02</div>
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-3xl font-bold mb-2">1-2 Weeks</div>
              <div className="text-lg font-medium opacity-90">Fast Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 font-black">03</div>
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-3xl font-bold mb-2">Launch!</div>
              <div className="text-lg font-medium opacity-90">Go Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              What You <span className="text-gradient">GET</span>
            </h2>
            <p className="text-3xl md:text-4xl text-gray-700 font-bold max-w-4xl mx-auto">
              Everything you need for a stunning online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-7xl mb-6"><FaLightbulb /></div>
              <h3 className="text-3xl font-black mb-4">Custom Design</h3>
              <p className="text-lg opacity-90 leading-relaxed">Unique, tailored design that perfectly captures your brand identity</p>
            </div>
            <div className="group relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 text-white hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-7xl mb-6"><FaBolt /></div>
              <h3 className="text-3xl font-black mb-4">Lightning Fast</h3>
              <p className="text-lg opacity-90 leading-relaxed">Optimized performance for speed and seamless user experience</p>
            </div>
            <div className="group relative bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-7xl mb-6"><FaStar /></div>
              <h3 className="text-3xl font-black mb-4">Mobile Perfect</h3>
              <p className="text-lg opacity-90 leading-relaxed">Flawless display on every device, from phone to desktop</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
            <div className="text-7xl mb-8">💎</div>
            <h3 className="text-4xl md:text-5xl font-black mb-6">All-Inclusive Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <FaCheck className="text-green-400 text-2xl flex-shrink-0" />
                <span className="text-lg font-semibold">Design Consultation</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FaCheck className="text-green-400 text-2xl flex-shrink-0" />
                <span className="text-lg font-semibold">Custom Branding</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FaCheck className="text-green-400 text-2xl flex-shrink-0" />
                <span className="text-lg font-semibold">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FaCheck className="text-green-400 text-2xl flex-shrink-0" />
                <span className="text-lg font-semibold">2-3 Revisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              The <span className="text-gradient">PROCESS</span>
            </h2>
            <p className="text-3xl md:text-4xl text-gray-700 font-bold">
              Simple, transparent, effective
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-[#6366f1] hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-[#6366f1] flex-shrink-0">1</div>
                <div>
                  <h3 className="text-4xl font-black mb-4">Talk & Plan</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We discuss your vision, goals, and requirements. Share your ideas, and we&apos;ll craft the perfect strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-[#ec4899] hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-[#ec4899] flex-shrink-0">2</div>
                <div>
                  <h3 className="text-4xl font-black mb-4">Design & Build</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our team creates your stunning website. You review, we refine. 2-3 revision rounds ensure perfection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-[#8b5cf6] hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-8xl font-black text-[#8b5cf6] flex-shrink-0">3</div>
                <div>
                  <h3 className="text-4xl font-black mb-4">Launch & Grow</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Go live in 1-2 weeks! Plus, optional maintenance support to keep your site fresh and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              Why It <span className="text-gradient">MATTERS</span>
            </h2>
            <p className="text-3xl md:text-4xl text-gray-700 font-bold">
              Real results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 text-white text-5xl font-black shadow-2xl">
                3x
              </div>
              <h3 className="text-3xl font-black mb-3">More Customers</h3>
              <p className="text-xl text-gray-600">Professional design converts 3x better than DIY sites</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 text-white text-5xl font-black shadow-2xl">
                98%
              </div>
              <h3 className="text-3xl font-black mb-3">Satisfaction</h3>
              <p className="text-xl text-gray-600">Our clients love their websites and see real growth</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 text-white text-5xl font-black shadow-2xl">
                24/7
              </div>
              <h3 className="text-3xl font-black mb-3">Always Working</h3>
              <p className="text-xl text-gray-600">Your website works around the clock to grow your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-8xl mb-8"><FaHeart /></div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight">
            Ready to START?
          </h2>
          <p className="text-2xl md:text-4xl mb-16 font-bold max-w-4xl mx-auto leading-tight">
            Let&apos;s create something amazing together
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-4 bg-white text-[#6366f1] px-16 py-8 rounded-full font-black text-2xl md:text-3xl hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-2xl">
            <span>Get Started Now</span>
            <span>→</span>
          </Link>
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/30">
              <div className="text-5xl font-black mb-2">€1400+</div>
              <div className="text-lg font-semibold opacity-90">Starting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/30">
              <div className="text-5xl font-black mb-2">1-2w</div>
              <div className="text-lg font-semibold opacity-90">Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/30">
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-lg font-semibold opacity-90">Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">CoreScene</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Whether you&apos;re a seasoned entrepreneur or just starting, let us accompany you on this exhilarating adventure, where your aspirations and ambitions meet their true potential. Together, we can make your entrepreneurial dreams a reality.
              </p>
              <div className="mt-6">
                <p className="font-semibold mb-2">Let&apos;s connect.</p>
                <a href="https://www.linkedin.com/in/ali-zuhairi/" target="_blank" rel="noopener noreferrer" className="text-[#ec4899] hover:text-[#f472b6] transition-colors">
                  LinkedIn →
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="text-xl font-bold mb-4">Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>CoreScene.com | 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
