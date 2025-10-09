'use client';

import Link from "next/link";
import { useState, useRef, FormEvent } from "react";
import { FaRocket, FaBullseye, FaBolt, FaLightbulb, FaDollarSign, FaUnlock, FaPalette, FaCog, FaTools, FaBook, FaCheck, FaHubspot, FaWordpress, FaWix } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setFormStatus('sending');
    setFormMessage('');

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      );
      
      setFormStatus('success');
      setFormMessage('Message sent successfully! We&apos;ll get back to you soon.');
      formRef.current.reset();
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again or contact us directly.');
      console.error('EmailJS error:', error);
    }
  };

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
              <Link href="/how-it-works" className="text-gray-700 hover:text-[#6366f1] transition-colors font-medium">
                How it works?
              </Link>
              <Link href="#contact" className="bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
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
              <Link href="/how-it-works" className="block text-gray-700 hover:text-[#6366f1] font-medium">How it works?</Link>
              <Link href="#contact" className="block bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-6 py-3 rounded-full font-semibold text-center">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#ec4899]/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#6366f1]/10 to-[#ec4899]/10 rounded-full">
              <span className="text-gradient font-semibold flex items-center justify-center gap-2"><FaRocket className="inline" /> Premium Web Design Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Don&apos;t miss out on potential leads because of a{", "}
              <span className="text-gradient">poorly designed website</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Choose your platform —<span className="font-semibold text-[#6366f1]">HubSpot</span>, 
              <span className="font-semibold text-[#ec4899]"> Wix</span>, 
              <span className="font-semibold text-[#6366f1]"> WordPress</span>— and we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#pricing" className="bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block w-full sm:w-auto text-center">
                Get Started Now
              </Link>
              <Link href="#process" className="border-2 border-[#6366f1] text-[#6366f1] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#6366f1] hover:text-white transition-all duration-300 inline-block w-full sm:w-auto text-center">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Platforms</span> We Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'HubSpot', color: 'from-[#ff7a59] to-[#ff5c35]', iconColor: 'text-[#ff7a59]', bgHover: 'from-[#ff7a59]/10 to-[#ff5c35]/10' },
              { name: 'WordPress', color: 'from-[#21759b] to-[#1e6a8d]', iconColor: 'text-[#21759b]', bgHover: 'from-[#21759b]/10 to-[#1e6a8d]/10' },
              { name: 'Wix', color: 'from-[#0c6efd] to-[#0a58ca]', iconColor: 'text-[#0c6efd]', bgHover: 'from-[#0c6efd]/10 to-[#0a58ca]/10' }
            ].map((platform, index) => (
              <div key={platform.name} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`text-6xl mb-4 ${platform.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    {index === 0 ? <FaHubspot /> : index === 1 ? <FaWordpress /> : <FaWix />}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-gray-600">Professional design and development tailored for {platform.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="gradient-border p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`text-6xl mb-6 inline-block p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg text-white transition-transform duration-300 group-hover:scale-110`}>
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1]/5 to-[#ec4899]/5" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Quick Start Guide
            </h2>
            <p className="text-2xl text-gray-600">
              <span className="font-bold text-gradient">6-step success:</span> Your design roadmap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Vision',
                description: 'Define your project&apos;s objectives and vision. Understand your target audience, goals, and the message you want to convey through your design.'
              },
              {
                step: '02',
                title: 'Research & Inspiration',
                description: 'Dive into research to gather insights and inspiration. Explore competitors, industry trends, and design styles to inform your creative direction.'
              },
              {
                step: '03',
                title: 'Concept Development',
                description: 'Brainstorm and sketch out initial design concepts. Experiment with layouts, color schemes, typography, and imagery to find the perfect visual identity.'
              },
              {
                step: '04',
                title: 'Design & Iteration',
                description: 'Bring your concepts to life by creating detailed designs. Iterate and refine, seeking feedback and making necessary adjustments to ensure your design aligns with your goals.'
              },
              {
                step: '05',
                title: 'Development & Execution',
                description: 'Transform your finalized design into a functional product or website. Collaborate with developers to ensure seamless integration of design elements.'
              },
              {
                step: '06',
                title: 'Testing & Launch',
                description: 'Conduct thorough testing to ensure your design functions flawlessly across devices and platforms. Once everything is set, launch your project, making it accessible to your audience.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-50 group-hover:text-[#6366f1]/10 transition-colors duration-300">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white rounded-full font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget-Friendly Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Budget-friendly</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cost Analysis', description: 'Conduct a thorough cost analysis before starting any project. Understand the client&apos;s budget constraints and provide transparent pricing.', icon: <FaDollarSign />, color: 'text-green-500', bgColor: 'bg-green-50' },
              { title: 'Open Source Platforms', description: 'Utilize open-source platforms like WordPress whenever possible. These platforms offer cost-effective solutions with a wide range of plugins.', icon: <FaUnlock />, color: 'text-blue-500', bgColor: 'bg-blue-50' },
              { title: 'Template Usage', description: 'In the case of Wix, leverage pre-designed templates to save time and costs. Customize these templates to align with the client&apos;s branding.', icon: <FaPalette />, color: 'text-purple-500', bgColor: 'bg-purple-50' },
              { title: 'Efficient Development', description: 'Streamline your development process to reduce man-hours and costs. Efficient coding practices and reusable components help speed up development.', icon: <FaCog />, color: 'text-orange-500', bgColor: 'bg-orange-50' },
              { title: 'Maintenance Plans', description: 'Offer cost-effective maintenance plans to ensure the website&apos;s longevity. Regular updates, security patches, and content updates bundled.', icon: <FaTools />, color: 'text-red-500', bgColor: 'bg-red-50' },
              { title: 'Training and Support', description: 'Empower clients with the knowledge to make minor updates themselves, reducing the need for constant developer intervention.', icon: <FaBook />, color: 'text-indigo-500', bgColor: 'bg-indigo-50' }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} ${service.color} text-3xl mb-4 transition-transform duration-300 group-hover:scale-110`}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Simple pricing
            </h2>
            <p className="text-3xl mb-4">
              <span className="text-gradient">Minimal investment,</span>
            </p>
            <p className="text-3xl font-bold">
              Maximum results
            </p>
            <p className="text-xl text-gray-300 mt-6">
              Enjoy high-quality experiences at incredibly competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#6366f1]/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Starter Plan</h3>
              <p className="text-gray-400 mb-6">One-time Payment</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">€1400</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>HubSpot, Wix, and WordPress</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Single Page Design</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Single Language</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Two Revisions</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>10 Euros / Professional Image</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300">
                Choose Plan
              </button>
            </div>

            {/* Performance Plan */}
            <div className="bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-3xl p-8 transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Performance Plan</h3>
              <p className="text-white/80 mb-6">One-time Payment</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">€1900</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Everything in Starter Plan</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Up to 3 Pages</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Up to 2 Langs Per Page</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Up to 3 Revisions Per Page</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Custom Domain Setup</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-white mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Business E-mail Setup</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#6366f1] py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                Choose Plan
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#ec4899]/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Elite Plan</h3>
              <p className="text-gray-400 mb-6">One-time or Subscription</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">Let&apos;s Talk</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Product and Service Design</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Scope of Work</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Tech Stack (ReactJS & Flutter)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Timeline</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Understanding Your Budget</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 text-xl mt-1 flex-shrink-0" />
                  <span>Streamline and Plan</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-[#ec4899] to-[#6366f1] text-white py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Don&apos;t be shy
            </h2>
            <p className="text-3xl font-bold text-gradient">
              Let&apos;s Talk
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none transition-colors text-lg"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none transition-colors text-lg"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none transition-colors text-lg resize-none"
              ></textarea>
            </div>
            
            {formMessage && (
              <div className={`p-4 rounded-xl text-center font-semibold ${
                formStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {formMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className={`w-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
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
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
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
