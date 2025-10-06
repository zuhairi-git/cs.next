'use client';

import Link from "next/link";
import { useState } from "react";
import { FaLightbulb, FaBolt, FaBullseye, FaPalette, FaShieldAlt, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
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
              <Link href="/about" className="text-[#6366f1] font-semibold">
                About
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium">
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
              <Link href="/about" className="block text-[#6366f1] font-semibold">About</Link>
              <Link href="/how-it-works" className="block text-gray-700 hover:text-[#6366f1] font-medium">How it works?</Link>
              <Link href="/#contact" className="block bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-3 rounded-full font-semibold text-center">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1]/10 via-white to-[#ec4899]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering Your Web Presence with<br />
            <span className="font-bold text-gradient">HubSpot, WordPress & Wix</span>
          </p>
        </div>
      </section>

      {/* Why Choose CoreScene */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why choose <span className="text-gradient">CoreScene</span>?
            </h2>
            <p className="text-2xl text-gray-600">
              Empowering Your Web Presence with<br />
              <span className="font-semibold text-gradient">HubSpot, WordPress & Wix</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovative Edge',
                description: 'CoreScene offers innovative and cutting-edge website solutions, setting your online presence apart.',
                icon: <FaLightbulb />,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Speed and Efficiency',
                description: 'We provide fast, world-class design for HubSpot, WordPress or Wix websites, ensuring a swift and efficient launch.',
                icon: <FaBolt />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Exceptional Expertise',
                description: 'With our team of seasoned professionals, you&apos;ll benefit from exceptional web design and development expertise to realize your vision.',
                icon: <FaBullseye />,
                gradient: 'from-orange-500 to-red-500'
              },
              {
                title: 'Tailored Solutions',
                description: 'We specialize in crafting tailored web solutions, ensuring your online presence aligns perfectly with your unique goals and needs.',
                icon: <FaPalette />,
                gradient: 'from-green-500 to-teal-500'
              },
              {
                title: 'Ongoing Support',
                description: 'Count on CoreScene for ongoing support and maintenance, guaranteeing your website remains at its peak performance.',
                icon: <FaShieldAlt />,
                gradient: 'from-red-500 to-pink-500'
              },
              {
                title: 'Proven Results',
                description: 'Our track record speaks for itself. We&apos;ve helped numerous businesses transform their online presence and achieve their digital goals.',
                icon: <FaChartLine />,
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="gradient-border p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`text-6xl mb-6 inline-block p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-[#6366f1] to-[#ec4899] text-white">
                <div className="text-6xl mb-6"><FaMapMarkerAlt /></div>
                <h2 className="text-4xl font-bold mb-6">Our Location?</h2>
                <p className="text-xl leading-relaxed">
                  We&apos;re in <span className="font-bold">Espoo</span>, a city in Finland.
                </p>
              </div>
              <div className="p-12 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Let&apos;s Meet!</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    If your location is in Finland, we&apos;re more than willing to coordinate a face-to-face meeting in either <span className="font-semibold text-[#6366f1]">Espoo</span> or <span className="font-semibold text-[#ec4899]">Helsinki</span>.
                  </p>
                  <div className="mt-8">
                    <Link href="/#contact" className="inline-block bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Schedule a Meeting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="text-gradient">Story</span>
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Whether you&apos;re a seasoned entrepreneur or just starting, let us accompany you on this exhilarating adventure, where your aspirations and ambitions meet their true potential.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At CoreScene, we believe in the power of exceptional web design to transform businesses. Our mission is to provide innovative, efficient, and expert solutions that help you stand out in the digital landscape.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Together, we can make your entrepreneurial dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let&apos;s create something amazing together
          </p>
          <Link href="/#contact" className="inline-block bg-white text-[#6366f1] px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Contact Us Today
          </Link>
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
