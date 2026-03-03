import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative group">
      {/* Mile marker */}
      <div className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
        <span className="font-display font-black text-white text-lg">{number}</span>
      </div>

      {/* Card */}
      <div className="ml-12 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sand-200 to-sand-300 rounded-xl flex items-center justify-center text-sunset-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Dust trail decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-sand-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
