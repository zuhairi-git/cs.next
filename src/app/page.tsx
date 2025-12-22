'use client';

import { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
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
      id: 'hubspot',
      name: 'HubSpot',
      icon: 'fa-hubspot',
      color: 'text-[#ffcf48]',
      desc: 'The Giant. A massive ecosystem of marketing automation and CRM gravity.',
      features: ['CMS Hub Implementation', 'CRM Migration', 'Custom Modules']
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'fa-wordpress',
      color: 'text-[#3b82f6]',
      desc: 'The Water Planet. Infinite flexibility and depth for those willing to explore.',
      features: ['Custom Theme Development', 'WooCommerce Integration', 'Performance Optimization']
    },
    {
      id: 'wix',
      name: 'Wix Studio',
      icon: 'fa-wix',
      color: 'text-white',
      desc: 'The Ice Cloud. Solid, structured, and stunningly beautiful rapid deployment.',
      features: ['Wix Studio Expert', 'Velo Development', 'Responsive Design']
    }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-[#ffcf48] selection:text-black overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#030305]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/img/logo.png" 
              alt="CoreScene Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700"
            />
            <span className="font-bold text-xl tracking-widest uppercase font-mono-tech">CoreScene</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-widest">
            <Link href="/about" className="text-gray-400 hover:text-[#ffcf48] transition-colors">MISSION DATA</Link>
            <Link href="#platforms" className="text-gray-400 hover:text-[#ffcf48] transition-colors">SYSTEMS</Link>
            <Link href="#process" className="text-gray-400 hover:text-[#ffcf48] transition-colors">TRAJECTORY</Link>
            <Link href="#contact" className="px-5 py-2.5 border border-white/20 hover:border-[#ffcf48] hover:text-[#ffcf48] transition-all">
              INITIATE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <i className={`fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#030305] border-b border-white/10 p-6 flex flex-col gap-4 font-mono-tech">
            <Link href="/about" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>MISSION DATA</Link>
            <Link href="#platforms" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>SYSTEMS</Link>
            <Link href="#process" className="text-lg text-gray-400" onClick={() => setIsMenuOpen(false)}>TRAJECTORY</Link>
            <Link href="#contact" className="text-lg text-[#ffcf48]" onClick={() => setIsMenuOpen(false)}>INITIATE</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gargantua Animation */}
        <div className="gargantua-container">
          <div className="accretion-disk"></div>
          <div className="event-horizon"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-block mb-6 px-4 py-1 border border-[#ffcf48]/30 bg-[#ffcf48]/10 rounded-full">
            <span className="font-mono-tech text-[#ffcf48] text-xs tracking-[0.2em]">T-MINUS 2026: LAUNCH IMMINENT</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-glow">
            DO NOT GO GENTLE<br />
            INTO THAT GOOD NIGHT.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We are explorers, pioneers, not caretakers. We engineer digital experiences that defy gravity and define the future.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="#contact" className="px-8 py-4 bg-[#ffcf48] text-black font-bold tracking-widest hover:bg-white transition-colors w-full md:w-auto">
              BEGIN MISSION
            </Link>
            <Link href="/about" className="px-8 py-4 border border-white/30 hover:border-white text-white font-mono-tech text-xs tracking-widest w-full md:w-auto">
              READ LOGS
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Section (The Systems) */}
      <section id="platforms" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 border-l-2 border-[#ffcf48] pl-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">PLANETARY SYSTEMS</h2>
            <p className="font-mono-tech text-[#ffcf48] text-sm tracking-widest">CHOOSE YOUR DESTINATION</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className="hud-card p-8 group hover:border-[#ffcf48]/50 transition-colors">
                <div className="mb-8 flex justify-between items-start">
                  <i className={`fa-brands ${platform.icon} text-4xl ${platform.color}`}></i>
                  <span className="font-mono-tech text-xs text-gray-500">SYS.0{platforms.indexOf(platform) + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed h-20">
                  {platform.desc}
                </p>
                <div className="border-t border-white/10 pt-6">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300 mb-2 font-mono-tech text-xs">
                      <span className="text-[#ffcf48]">{'>'}</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (Trajectory) */}
      <section id="process" className="py-32 px-6 relative z-10 bg-black/50 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">MISSION<br />TRAJECTORY.</h2>
              <p className="text-xl text-gray-400 mb-12 font-light">
                The only thing we can&apos;t cheat is physics. Our process is calculated, precise, and designed to withstand the pressures of the modern web.
              </p>
              <div className="font-mono-tech text-xs text-[#ffcf48]">
                STATUS: ALL SYSTEMS NOMINAL
              </div>
            </div>
            <div className="space-y-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#ffcf48] to-transparent opacity-30"></div>
              
              {[
                { step: '01', title: 'LIFT OFF', subtitle: 'Discovery & Strategy', desc: 'Analyzing atmospheric conditions. Defining mission parameters and fuel requirements.' },
                { step: '02', title: 'HYPER SLEEP', subtitle: 'Development Phase', desc: 'Deep work. Building the vessel with semantic code and robust frameworks.' },
                { step: '03', title: 'TOUCHDOWN', subtitle: 'Deployment & Launch', desc: 'Landing on the new world. SEO optimization and performance calibration.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 relative">
                  <div className="w-10 h-10 rounded-full border border-[#ffcf48] bg-black flex items-center justify-center text-[#ffcf48] font-mono-tech text-xs z-10">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-[#ffcf48] font-mono-tech text-xs mb-3">{item.subtitle}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Resources) */}
      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">MISSION RESOURCES.</h2>
            <p className="text-xl text-gray-400 font-light">
              Transparent fuel costs for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="hud-card p-8">
              <div className="mb-4 text-gray-400 font-mono-tech text-xs tracking-widest">MODULE A</div>
              <div className="text-4xl font-bold mb-2">€2,499</div>
              <div className="text-gray-500 text-sm mb-8">Single Ignition</div>
              <p className="text-gray-300 mb-8 text-sm">Essential life support for small outposts.</p>
              <Link href="#contact" className="block w-full py-3 border border-white/20 text-center font-mono-tech text-xs hover:bg-white hover:text-black transition-all">
                SELECT MODULE
              </Link>
            </div>

            {/* Professional */}
            <div className="hud-card p-8 border-[#ffcf48]/50 relative">
              <div className="absolute top-0 right-0 bg-[#ffcf48] text-black text-[10px] font-bold px-2 py-1 font-mono-tech">RECOMMENDED</div>
              <div className="mb-4 text-[#ffcf48] font-mono-tech text-xs tracking-widest">MODULE B</div>
              <div className="text-4xl font-bold mb-2 text-gold-glow">€4,999</div>
              <div className="text-gray-400 text-sm mb-8">Single Ignition</div>
              <p className="text-gray-200 mb-8 text-sm">Advanced telemetry and CMS capabilities for growing colonies.</p>
              <Link href="#contact" className="block w-full py-3 bg-[#ffcf48] text-black text-center font-mono-tech text-xs font-bold hover:bg-white transition-all">
                SELECT MODULE
              </Link>
            </div>

            {/* Enterprise */}
            <div className="hud-card p-8">
              <div className="mb-4 text-white font-mono-tech text-xs tracking-widest">MODULE C</div>
              <div className="text-4xl font-bold mb-2">CUSTOM</div>
              <div className="text-gray-500 text-sm mb-8">Variable Output</div>
              <p className="text-gray-300 mb-8 text-sm">Interstellar travel. Complex integrations and large-scale terraforming.</p>
              <Link href="#contact" className="block w-full py-3 border border-white/20 text-center font-mono-tech text-xs hover:bg-white hover:text-black transition-all">
                OPEN CHANNEL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">INITIATE DOCKING.</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Transmit your coordinates. We will respond within 24 earth hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left hud-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono-tech text-[#ffcf48] mb-2">IDENTIFIER</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#ffcf48] transition-colors font-mono"
                  placeholder="Cooper"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-tech text-[#ffcf48] mb-2">FREQUENCY</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#ffcf48] transition-colors font-mono"
                  placeholder="cooper@nasa.gov"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-tech text-[#ffcf48] mb-2">TRANSMISSION</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#ffcf48] transition-colors font-mono"
                placeholder="Describe your mission parameters..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-[#ffcf48] transition-colors disabled:opacity-50 font-mono-tech"
            >
              {loading ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center font-mono-tech text-xs">TRANSMISSION RECEIVED.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center font-mono-tech text-xs">SIGNAL LOST. RETRY.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/img/logo.png" 
              alt="CoreScene Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 grayscale opacity-50 hover:opacity-100 transition-opacity"
            />
            <span className="font-bold text-lg tracking-widest font-mono-tech text-gray-500">CORESCENE</span>
          </div>
          <div className="text-gray-600 text-xs font-mono-tech">
            &copy; {new Date().getFullYear()} CORESCENE SYSTEMS. ENDURANCE.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-gray-600 hover:text-[#ffcf48] transition-colors"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
