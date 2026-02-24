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
  const baseStyles = 'font-display font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sunset-500 to-sunset-600 text-white hover:from-sunset-600 hover:to-sunset-700 shadow-lg hover:shadow-xl hover:shadow-sunset-500/30 hover:-translate-y-0.5',
    secondary: 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 shadow-lg hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5',
    outline: 'border-2 border-sunset-500 text-sunset-600 hover:bg-sunset-50 hover:border-sunset-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} type={type}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
    </button>
  );
}
