import React from 'react';

interface IconProps {
  name: string;
  /** Icon size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Background gradient colors (e.g., 'from-blue-500 to-cyan-500') */
  gradient?: string;
  /** Icon type: duotone-thin, brands, or inline */
  type?: 'duotone-thin' | 'brands' | 'inline';
  /** Additional CSS classes */
  className?: string;
  /** Background container style */
  variant?: 'square' | 'circle' | 'none';
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  gradient,
  type = 'duotone-thin',
  className = '',
  variant = 'none',
}) => {
  // Size mappings for consistent dimensions
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
    '2xl': 'text-7xl',
  };

  // Container size mappings (width/height for background containers)
  const containerSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  // Icon type classes
  const iconTypeClasses = {
    'duotone-thin': 'fa-duotone fa-thin',
    'brands': 'fa-brands',
    'inline': 'fa-duotone fa-thin',
  };

  // Build the icon element
  const iconElement = (
    <i className={`${iconTypeClasses[type]} fa-${name} ${!gradient && !variant ? sizeClasses[size] : ''}`}></i>
  );

  // If no background container, return icon directly
  if (variant === 'none') {
    return <span className={className}>{iconElement}</span>;
  }

  // Container variant styles
  const containerVariantClasses = {
    square: 'rounded-2xl',
    circle: 'rounded-full',
  };

  // Render icon with background container
  return (
    <div
      className={`
        ${containerSizes[size]}
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-[var(--glass-border)] backdrop-blur-md border border-[var(--glass-border)]'}
        ${containerVariantClasses[variant]}
        shadow-lg text-[var(--starlight)]
        transition-transform duration-300 group-hover:scale-110
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {iconElement}
    </div>
  );
};

export default Icon;
