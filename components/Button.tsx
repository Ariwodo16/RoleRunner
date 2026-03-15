'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'font-display font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group will-change-transform';

  const variants = {
    primary:
      'bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5',
    secondary:
      'bg-gradient-to-r from-charcoal-700 via-charcoal-800 to-charcoal-900 text-white shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5',
    outline:
      'border-2 border-sky-500 text-sky-600 bg-white/80 backdrop-blur-sm hover:bg-sky-50 hover:border-sky-600 hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-20deg] bg-white/20 blur-md translate-x-[-180%] transition-transform duration-700 group-hover:translate-x-[420%]" />

      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
      )}

      {variant === 'secondary' && (
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {content}
    </button>
  );
}
