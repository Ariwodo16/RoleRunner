import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:-translate-y-2">
      <div className="relative mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        {/* Speed line effect on hover */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-sunset-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
