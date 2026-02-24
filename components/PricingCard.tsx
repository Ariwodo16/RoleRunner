'use client';

import React from 'react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref?: string;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaHref = '#apply',
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
        isPopular
          ? 'bg-gradient-to-br from-sunset-500 to-sunset-600 text-white shadow-2xl shadow-sunset-500/30 scale-105'
          : 'bg-white shadow-xl hover:shadow-2xl border border-gray-200'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          {badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className={`font-display font-bold text-2xl mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-sm ${isPopular ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className={`font-display font-black text-5xl ${isPopular ? 'text-white' : 'text-gray-900'}`}>
            {price}
          </span>
          {price !== 'Custom' && (
            <span className={`text-lg ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
              /month
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-white' : 'text-sunset-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant={isPopular ? 'secondary' : 'primary'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}
