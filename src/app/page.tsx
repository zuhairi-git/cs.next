'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
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
      desc: 'Enterprise CRM gravity well. Powerful, centralized, and infinitely scalable.',
      features: ['CMS Implementation', 'Data Migration', 'Custom Modules']
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'fa-wordpress',
      desc: 'Infinite open source horizon. Flexible, vast, and community-driven.',
      features: ['Theme Development', 'WooCommerce', 'Performance Optimization']
    },
    {
      id: 'wix',
      name: 'Wix Studio',
      icon: 'fa-wix',
      desc: 'Rapid deployment structure. Fast, beautiful, and uncompromising.',
      features: ['Studio Expert', 'Velo Code', 'Responsive Layouts']
    }
  ];

  return (
    <div className="min-h-screen text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      {/* Nebula Background */}
      <div className="nebula-bg">
        <div className="nebula-blob nebula-blob-1"></div>
        <div className="nebula-blob nebula-blob-2"></div>
        <div className="nebula-blob nebula-blob-3"></div>
      </div>
      <div className="stars"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/img/logo.png"
              alt="CoreScene logo"
              className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.25)] group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-xl tracking-tight text-white">CoreScene</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="text-white transition-colors">Home</Link>
            <Link href="/#platforms" className="hover:text-white transition-colors">Systems</Link>
            <Link href="/how-it-works" className="hover:text-white transition-colors">Trajectory</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#contact" className="btn-primary text-sm">
              Initiate Sequence
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            <i className={`fa-duotone fa-thin ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bg-[#050507]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 text-lg font-medium z-50 animate-in slide-in-from-top-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link href="/" className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/#platforms" className="px-3 py-3 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>Systems</Link>
            <Link href="/how-it-works" className="px-3 py-3 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>Trajectory</Link>
            <Link href="/about" className="px-3 py-3 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <div className="pt-2">
              <Link href="/#contact" className="btn-primary w-full justify-center text-base" onClick={() => setIsMenuOpen(false)}>Initiate Sequence</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-gray-300">SIGNAL DETECTED</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              We Build<br />
              <span className="text-gradient-purple">Digital Gravity.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              In a universe of noise, we create the signal. High-performance web architectures that pull the world to you.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link href="#contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-purple-500/25">
                Initialize Project
              </Link>
              <Link href="#platforms" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm font-medium">
                Analyze Systems
              </Link>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Floating Cards */}
            <div className="absolute top-1/4 right-0 w-72 h-72 glass-card p-8 animate-float z-20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                <i className="fa-brands fa-hubspot text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">HubSpot</h3>
              <p className="text-sm text-gray-400">Centralized gravity for enterprise scale.</p>
            </div>

            <div className="absolute bottom-1/4 left-10 w-64 h-64 glass-card p-8 animate-float z-10" style={{ animationDelay: '-2s' }}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <i className="fa-brands fa-wordpress text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">WordPress</h3>
              <p className="text-sm text-gray-400">Infinite expansion capabilities.</p>
            </div>

            <div className="absolute top-14 left-24 w-60 h-60 glass-card p-8 animate-float z-30" style={{ animationDelay: '-4s' }}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                <i className="fa-brands fa-wix text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Wix Studio</h3>
              <p className="text-sm text-gray-400">Fast, polished sites with total control.</p>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-32 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The <span className="text-gradient-blue">Trinity</span> Engine</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We don&apos;t guess. We deploy the three most powerful engines in the known web universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className="glass-card p-10 flex flex-col group hover:bg-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <i className={`fa-brands ${platform.icon} text-4xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {platform.desc}
                </p>
                <ul className="space-y-4 border-t border-white/10 pt-8">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-3">
                      <i className="fa-duotone fa-thin fa-check text-purple-400"></i>
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
      <section id="process" className="py-32 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Calculated <span className="text-gradient-purple">Trajectory.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-12">
                Chaos is the enemy of conversion. Our process is a linear progression through time and space, ensuring every milestone is reached with mathematical precision.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Analysis', desc: 'Deep scanning of your market position and objectives.' },
                  { step: '02', title: 'Synthesis', desc: 'Architecting the solution in the development void.' },
                  { step: '03', title: 'Launch', desc: 'Deploying your signal to the global network.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors bg-[#050507]">
                        {item.step}
                      </div>
                      {i !== 2 && <div className="w-px h-full bg-white/10 my-2 group-hover:bg-purple-500/50 transition-colors"></div>}
                    </div>
                    <div className="pb-12">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] glass-card overflow-hidden hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
              {/* Abstract visual representation of a wormhole or tunnel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.5)] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Resources */}
      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">Engagement <span className="text-gradient-blue">Protocols</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Core', price: '€2,499', type: 'Essential', features: ['Single Page Architecture', 'Basic SEO Telemetry', 'Contact Interface'] },
              { name: 'Velocity', price: '€4,999', type: 'Advanced', features: ['Multi-page Ecosystem', 'CMS Integration', 'Analytics Dashboard'] },
              { name: 'Singularity', price: 'Custom', type: 'Enterprise', features: ['Full Customization', 'API Integration', 'Priority Support Channel'] }
            ].map((plan, i) => (
              <div key={i} className={`glass-card p-10 flex flex-col items-center text-center relative overflow-hidden ${i === 1 ? 'border-purple-500/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]' : ''}`}>
                {i === 1 && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>}
                <div className="text-sm font-bold tracking-widest text-gray-500 mb-6 uppercase">{plan.name}</div>
                <div className="text-5xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-sm text-purple-400 mb-8 font-medium">{plan.type}</div>
                
                <ul className="space-y-4 mb-10 w-full">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="text-gray-400 text-sm border-b border-white/5 pb-2 last:border-0">{f}</li>
                  ))}
                </ul>

                <Link href="#contact" className={`w-full py-3 rounded-full font-bold text-sm transition-all ${i === 1 ? 'bg-white text-black hover:bg-gray-200' : 'border border-white/20 hover:bg-white/10'}`}>
                  Initialize Protocol
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Establish <span className="text-gradient-purple">Connection</span></h2>
              <p className="text-gray-400">Secure channel open. Awaiting input.</p>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">CALLSIGN</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">FREQUENCY (EMAIL)</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-widest text-gray-500 ml-4">TRANSMISSION DATA</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                  placeholder="Enter transmission..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary py-4 text-lg shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Broadcasting...' : 'Broadcast Signal'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center text-sm font-medium animate-in fade-in">Transmission Received.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm font-medium animate-in fade-in">Signal Lost. Retry.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#050507] relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src="/img/logo.png"
              alt="CoreScene logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-bold text-gray-300">CoreScene Systems</span>
            <span className="mx-2 text-gray-700">|</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/ali-zuhairi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
