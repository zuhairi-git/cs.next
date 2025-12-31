'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'contrast';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps & {
  href: LinkProps['href'];
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function getClasses(variant: ButtonVariant, className: string | undefined) {
  let base = '';
  switch (variant) {
    case 'primary':
      base = 'btn-primary';
      break;
    case 'contrast':
      base = 'btn-contrast';
      break;
    case 'outline':
    case 'secondary':
      base = 'btn-outline';
      break;
    default:
      base = 'btn-primary';
  }

  return `${base} ${className ?? ''}`.trim();
}

export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, children, variant = 'primary', className, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={getClasses(variant, className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, variant = 'primary', className, ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button className={getClasses(variant, className)} {...buttonProps}>
      {children}
    </button>
  );
}
