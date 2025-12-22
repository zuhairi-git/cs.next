'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    // Replace with your actual EmailJS credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const platforms = [
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'fa-wordpress',
      color: 'text-blue-400',
      desc: 'The world&apos;s most popular CMS, engineered for scale and flexibility.',
      features: ['Custom Theme Development', 'WooCommerce Integration', 'Performance Optimization']
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      icon: 'fa-hubspot',
      color: 'text-orange-500',
      desc: 'Marketing automation and CRM integration for growth-focused businesses.',
      features: ['CMS Hub Implementation', 'CRM Migration', 'Custom Modules']
    },
    {
      id: 'wix',
      name: 'Wix Studio',
      icon: 'fa-wix',
      color: 'text-white',
      desc: 'Rapid deployment with stunning visuals for creative brands.',
      features: ['Wix Studio Expert', 'Velo Development', 'Responsive Design']
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="font-bold text-xl tracking-tight">CoreScene</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#platforms" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Platforms</Link>
            <Link href="#process" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Process</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors">
              Start Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <i className={`fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4">
            <Link href="#platforms" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>Platforms</Link>
            <Link href="#process" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>Process</Link>
            <Link href="#pricing" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#contact" className="text-lg text-indigo-400" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-grid">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Accepting New Projects for 2025
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                HubSpot.<br />
                WordPress.<br />
                <span className="text-gradient">Wix Studio.</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
                We don&apos;t just build websites. We engineer digital experiences that drive growth, capture leads, and define brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all btn-glow">
                  Get a Proposal
                </Link>
                <Link href="#platforms" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all">
                  Explore Platforms
                </Link>
              </div>
            </div>
            
            {/* Hero Visual - Abstract Representation of the 3 Platforms */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-full h-full">
                {/* Card 1: WordPress */}
                <div className="absolute top-10 right-10 w-64 h-80 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 transform rotate-6 hover:rotate-0 transition-all duration-500 z-10 shadow-2xl">
                  <i className="fa-brands fa-wordpress text-6xl text-blue-400 mb-4"></i>
                  <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                  <div className="h-2 w-32 bg-white/10 rounded"></div>
                </div>
                
                {/* Card 2: HubSpot */}
                <div className="absolute top-20 right-40 w-64 h-80 bg-[#202020] border border-white/10 rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 z-20 shadow-2xl">
                  <i className="fa-brands fa-hubspot text-6xl text-orange-500 mb-4"></i>
                  <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                  <div className="h-2 w-32 bg-white/10 rounded"></div>
                </div>

                {/* Card 3: Wix */}
                <div className="absolute top-40 right-20 w-64 h-80 bg-[#252525] border border-white/10 rounded-2xl p-6 transform rotate-12 hover:rotate-0 transition-all duration-500 z-30 shadow-2xl">
                  <i className="fa-brands fa-wix text-6xl text-white mb-4"></i>
                  <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                  <div className="h-2 w-32 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Trinity.</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              We specialize in the three most powerful platforms on the web. No distractions. Just mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className="card-modern p-8 rounded-3xl group">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <i className={`fa-brands ${platform.icon} text-3xl ${platform.color}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {platform.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <i className="fa-duotone fa-check text-indigo-500"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Precision<br />Engineering.</h2>
              <p className="text-xl text-gray-400 mb-12">
                Our process is stripped of fluff. We focus on what matters: shipping high-quality code that converts.
              </p>
              <Link href="#contact" className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2">
                Start your build <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We analyze your market, competitors, and goals to define the technical roadmap.' },
                { step: '02', title: 'Development', desc: 'We build using clean, semantic code and modern frameworks. No bloat.' },
                { step: '03', title: 'Deployment', desc: 'Rigorous testing, SEO optimization, and a seamless launch to production.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 group">
                  <div className="text-4xl font-bold text-white/10 group-hover:text-indigo-500 transition-colors font-mono">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparent Investment.</h2>
            <p className="text-xl text-gray-400">
              Clear pricing for clear results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="card-modern p-8 rounded-3xl border border-white/10">
              <div className="mb-4 text-indigo-400 font-bold text-sm tracking-wider uppercase">Starter</div>
              <div className="text-4xl font-bold mb-2">€2,499</div>
              <div className="text-gray-500 text-sm mb-8">One-time payment</div>
              <p className="text-gray-300 mb-8">Perfect for small businesses needing a professional presence.</p>
              <Link href="#contact" className="block w-full py-3 rounded-xl border border-white/20 text-center font-bold hover:bg-white hover:text-black transition-all">
                Select Plan
              </Link>
            </div>

            {/* Professional */}
            <div className="card-modern p-8 rounded-3xl border border-indigo-500/50 bg-indigo-500/5 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
              <div className="mb-4 text-indigo-400 font-bold text-sm tracking-wider uppercase">Professional</div>
              <div className="text-4xl font-bold mb-2">€4,999</div>
              <div className="text-gray-400 text-sm mb-8">One-time payment</div>
              <p className="text-gray-200 mb-8">For growing companies requiring advanced functionality and CMS.</p>
              <Link href="#contact" className="block w-full py-3 rounded-xl bg-indigo-600 text-white text-center font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25">
                Select Plan
              </Link>
            </div>

            {/* Enterprise */}
            <div className="card-modern p-8 rounded-3xl border border-white/10">
              <div className="mb-4 text-pink-500 font-bold text-sm tracking-wider uppercase">Enterprise</div>
              <div className="text-4xl font-bold mb-2">Custom</div>
              <div className="text-gray-500 text-sm mb-8">Tailored quote</div>
              <p className="text-gray-300 mb-8">Complex integrations, custom development, and large-scale migrations.</p>
              <Link href="#contact" className="block w-full py-3 rounded-xl border border-white/20 text-center font-bold hover:bg-white hover:text-black transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-grid border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Tell us about your project goals..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#020202]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-bold text-lg">CoreScene</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CoreScene. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
