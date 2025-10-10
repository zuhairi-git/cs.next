'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Icon from '@/components/Icon';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/img/logo.png" alt="CoreScene logo" width={36} height={36} priority />
                <span className="text-3xl font-bold text-gradient">CoreScene</span>
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-white to-[#ec4899]/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ec4899]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#6366f1]/10 to-[#ec4899]/10 rounded-full animate-float">
            <span className="text-gradient font-semibold flex items-center justify-center gap-2">
              <i className="fa-duotone fa-thin fa-rocket"></i> Your Web Design Partner
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            About <span className="text-gradient">CoreScene</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We&apos;re not just a web design agency—we&apos;re your strategic partner in creating digital experiences that <span className="font-bold text-gradient">captivate, convert, and grow</span> your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-gray-600 font-medium">Platforms Mastered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#6366f1]/10 rounded-full">
                <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas into <span className="text-gradient">Digital Reality</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At CoreScene, we believe every business deserves a stunning online presence. Our mission is to democratize world-class web design by making it accessible, affordable, and tailored to your unique vision.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a startup founder, a growing business, or an established enterprise, we&apos;re here to turn your digital dreams into reality with expertise, creativity, and unwavering dedication.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-3 rounded-xl">
                      <i className="fa-duotone fa-thin fa-heart text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Client-Focused</h3>
                      <p className="text-gray-600">Your success is our priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#ec4899] to-[#f472b6] p-3 rounded-xl">
                      <i className="fa-duotone fa-thin fa-star text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Quality Driven</h3>
                      <p className="text-gray-600">Excellence in every pixel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] p-3 rounded-xl">
                      <i className="fa-duotone fa-thin fa-rocket text-white text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Innovation Led</h3>
                      <p className="text-gray-600">Cutting-edge solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CoreScene */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why choose <span className="text-gradient">CoreScene</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative excellence to deliver websites that don&apos;t just look great—they perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovative Edge',
                description: 'Stay ahead with cutting-edge design trends and technologies that make your brand stand out in the digital landscape.',
                iconName: 'lightbulb',
                gradient: 'from-blue-500 to-cyan-500',
                stat: '100%',
                statLabel: 'Custom Designs'
              },
              {
                title: 'Lightning Fast',
                description: 'Experience rapid turnaround times without compromising quality. Your website goes live faster than you expect.',
                iconName: 'bolt',
                gradient: 'from-purple-500 to-pink-500',
                stat: '< 2 weeks',
                statLabel: 'Average Delivery'
              },
              {
                title: 'Expert Team',
                description: 'Benefit from years of combined expertise in design, development, and digital strategy from our passionate team.',
                iconName: 'bullseye',
                gradient: 'from-orange-500 to-red-500',
                stat: '10+ years',
                statLabel: 'Experience'
              },
              {
                title: 'Tailored Solutions',
                description: 'No templates, no shortcuts. Every website is crafted uniquely to match your brand identity and business goals.',
                iconName: 'palette',
                gradient: 'from-green-500 to-teal-500',
                stat: 'Your Way',
                statLabel: 'Customization'
              },
              {
                title: 'Ongoing Support',
                description: 'Our partnership doesn&apos;t end at launch. Enjoy continuous support, updates, and maintenance to keep you ahead.',
                iconName: 'shield',
                gradient: 'from-red-500 to-pink-500',
                stat: '24/7',
                statLabel: 'Available'
              },
              {
                title: 'Proven Results',
                description: 'Join dozens of satisfied clients who&apos;ve seen real growth and improved conversions with their new websites.',
                iconName: 'chart-line',
                gradient: 'from-indigo-500 to-purple-500',
                stat: '98%',
                statLabel: 'Happy Clients'
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-transparent">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{feature.statLabel}</div>
                    </div>
                  </div>
                  <Icon 
                    name={feature.iconName} 
                    size="lg" 
                    gradient={feature.gradient} 
                    variant="square"
                    className="mb-6 group-hover:rotate-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Clear communication, honest pricing, and no hidden surprises. We believe in building trust through openness.',
                iconName: 'users',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Excellence',
                description: 'We never settle for good enough. Every project gets our full attention and expertise for outstanding results.',
                iconName: 'award',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Partnership',
                description: 'Your success is our success. We work alongside you as a dedicated partner, not just a service provider.',
                iconName: 'handshake',
                color: 'from-orange-500 to-red-500'
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10">
                  <Icon 
                    name={value.iconName} 
                    size="md" 
                    gradient={value.color} 
                    variant="square"
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
              <div className="p-12 text-white">
                <div className="inline-block p-4 bg-white/20 rounded-2xl mb-6">
                  <i className="fa-duotone fa-thin fa-location-dot text-5xl"></i>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Based in Finland</h2>
                <p className="text-xl leading-relaxed mb-6">
                  We&apos;re proudly located in <span className="font-bold">Espoo</span>, serving clients locally and globally.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <i className="fa-duotone fa-thin fa-location-dot text-white"></i>
                  <p className="font-semibold">Espoo, Finland</p>
                </div>
              </div>
              <div className="p-12 bg-white flex items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Let&apos;s Meet!</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Located in Finland? We&apos;d love to meet you in person! Let&apos;s grab a coffee in <span className="font-semibold text-[#6366f1]">Espoo</span> or <span className="font-semibold text-[#ec4899]">Helsinki</span> and discuss your project face-to-face.
                  </p>
                  <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span>Schedule a Meeting</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#ec4899]/10 rounded-full">
                <span className="text-[#ec4899] font-semibold text-sm uppercase tracking-wide">Our Journey</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  CoreScene was born from a simple belief: <span className="font-semibold text-gray-900">every business deserves a beautiful, functional website</span> that truly represents their brand and vision.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you&apos;re a seasoned entrepreneur or just starting your journey, we&apos;re here to accompany you on this exhilarating adventure. Your aspirations and ambitions deserve a digital presence that matches their potential.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine years of expertise with a passion for innovation, delivering web solutions that don&apos;t just look good—they <span className="font-semibold text-gray-900">drive real business results</span>.
                </p>
                <div className="pt-6">
                  <Link href="/how-it-works" className="inline-flex items-center gap-2 text-[#6366f1] font-bold text-lg hover:gap-4 transition-all duration-300">
                    <span>Learn How We Work</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <i className="fa-duotone fa-thin fa-rocket text-4xl"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Founded on Innovation</h4>
                      <p className="text-gray-600 text-sm">Started with a passion for creating exceptional digital experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <i className="fa-duotone fa-thin fa-briefcase text-4xl"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Focused</h4>
                      <p className="text-gray-600 text-sm">Every decision driven by your success and growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                    <i className="fa-duotone fa-thin fa-star text-4xl"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Future Ready</h4>
                      <p className="text-gray-600 text-sm">Building websites that grow with your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm uppercase tracking-wide">Let&apos;s Build Together</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the growing list of businesses that trust CoreScene with their online success. Let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-[#6366f1] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Start Your Project</span>
              <span>→</span>
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#6366f1] transition-all duration-300">
              <span>How It Works</span>
            </Link>
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
