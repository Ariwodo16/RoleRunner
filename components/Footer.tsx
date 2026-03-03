import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/>
                </svg>
              </div>
              <span className="font-display font-black text-xl text-white">RoleRunner</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your job search, executed at full speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-sunset-400 transition-colors">How it Works</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-sunset-400 transition-colors">Packages</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-sunset-400 transition-colors">Results</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-sunset-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-sunset-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-sunset-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-sunset-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-sunset-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>rolerunner@gmail.com</li>
              <li>Support available</li>
              <li>Mon-Fri, 9am-6pm EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 RoleRunner. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs max-w-md text-center md:text-right">
              RoleRunner is a job search execution service. We apply on your behalf using your provided materials. We prioritize relevance and accuracy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
