import React from 'react';

export type PlatformType = 'hubspot' | 'wordpress' | 'wix';

interface PlatformIconProps {
  platform: PlatformType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PlatformIcon({ platform, className = '', size = 'md' }: PlatformIconProps) {
  const getIconClass = () => {
    switch (platform) {
      case 'hubspot': return 'fa-hubspot';
      case 'wordpress': return 'fa-wordpress';
      case 'wix': return 'fa-wix';
      default: return '';
    }
  };

  const sizeClasses = {
    sm: { container: 'w-12 h-12 rounded-xl', icon: 'text-xl' },
    md: { container: 'w-20 h-20 rounded-2xl', icon: 'text-4xl' },
    lg: { container: 'w-24 h-24 rounded-3xl', icon: 'text-5xl' },
  };

  const { container, icon } = sizeClasses[size];

  return (
    <div className={`${container} bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg ${className}`}>
      <i className={`fa-brands ${getIconClass()} ${icon} text-[var(--starlight)]`}></i>
    </div>
  );
}
