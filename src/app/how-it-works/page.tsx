'use client';

import Link from "next/link";
import { useState } from "react";
import { FaUsers, FaTrophy, FaDollarSign, FaPalette, FaChartLine, FaSmile, FaCheck, FaChartBar, FaRocket } from 'react-icons/fa';

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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1]/10 via-white to-[#ec4899]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            How it <span className="text-gradient">works?</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            What do you pay for and what are the returns on your investments?
          </p>
        </div>
      </section>

      {/* What Do You Pay For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's start with the <span className="text-gradient">obvious</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              What do you pay for?
            </h3>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-12 border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When it comes to designing your website using <span className="font-semibold text-[#6366f1]">HubSpot</span>, <span className="font-semibold text-[#ec4899]">Wix</span>, or <span className="font-semibold text-[#6366f1]">WordPress</span>, you'll need to budget for the website design service itself.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In addition to this, there are some other costs to keep in mind. For instance, you'll need to cover the expenses for your domain name. If you opt for a custom domain with WordPress, there might be a premium cost involved. Similarly, with Wix, choosing premium features can give your site a more professional look. The same principle applies to HubSpot.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              However, if you're looking to save money, you also have the option of setting up your own server to install WordPress. In summary, along with our design service, you should be prepared for these additional expenses that are part of the website development process.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1]/5 to-[#ec4899]/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white px-8 py-3 rounded-full font-bold text-xl mb-6">
              WE'VE GOT YOU COVERED!
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore our website <span className="text-gradient">maintenance</span> and credit options
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If you're interested in outsourcing the maintenance of your website, we can provide that service as well.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The extent of the services and the frequency at which you require them can be credited based on your previous purchases. If you've previously acquired website services from us, you'll accumulate credits that can be used for future website purchases or maintenance needs.
            </p>
          </div>
        </div>
      </section>

      {/* The Power of Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              The Power of <span className="text-gradient">Design!</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">
              Enhancing Customer Engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Attracting Customers',
                description: 'Good design can help bring in more customers, keeping them engaged and possibly boosting your income and customer satisfaction.',
                icon: <FaUsers />,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Competing Better',
                description: 'Effective design sets you apart from rivals, making your product or service more appealing to customers.',
                icon: <FaTrophy />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Saving Costs',
                description: 'Proper design and development can make your operations more efficient, cutting long-term expenses.',
                icon: <FaDollarSign />,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Building Your Brand',
                description: 'A strong visual style helps more people recognize your brand and stick with it.',
                icon: <FaPalette />,
                gradient: 'from-orange-500 to-red-500'
              },
              {
                title: 'Boosting Income',
                description: 'If you make money from your product, user-friendly design can increase sales and your overall revenue.',
                icon: <FaChartLine />,
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Happy Customers',
                description: 'Well-thought-out design often means satisfied customers who stay loyal to your business.',
                icon: <FaSmile />,
                gradient: 'from-pink-500 to-rose-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className={`text-6xl mb-6 inline-block p-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Returns */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Investment, <span className="text-gradient">Your Returns</span>
            </h2>
            <p className="text-xl text-gray-300">
              Understanding the value of professional web design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><FaChartBar /> Short-term Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Immediate professional online presence</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Fast deployment and launch</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Enhanced credibility with customers</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Mobile-responsive design from day one</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><FaRocket /> Long-term Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Increased customer conversion rates</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Better search engine rankings</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Reduced marketing costs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Scalable platform for growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest in Your Success?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Link href="/#contact" className="inline-block bg-white text-[#6366f1] px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Get Your Quote Today
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
                Whether you're a seasoned entrepreneur or just starting, let us accompany you on this exhilarating adventure, where your aspirations and ambitions meet their true potential. Together, we can make your entrepreneurial dreams a reality.
              </p>
              <div className="mt-6">
                <p className="font-semibold mb-2">Let's connect.</p>
                <a href="#" className="text-[#ec4899] hover:text-[#f472b6] transition-colors">
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
