'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

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
  const base = variant === 'primary'
    ? 'btn-primary'
    : 'rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] transition-all backdrop-blur-sm font-medium text-[var(--starlight)] shadow-soft';

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
