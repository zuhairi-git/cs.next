'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050507] relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Image src="/img/logo.png" alt="CoreScene logo" width={36} height={36} className="w-9 h-9 object-contain" />
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
  );
}
