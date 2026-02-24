import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - RoleRunner',
  description: 'RoleRunner Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-black text-5xl md:text-6xl text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: February 11, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide to us when applying for our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name, email address, and phone number</li>
                <li>Resume, portfolio links, and professional profiles</li>
                <li>Job search criteria (target roles, locations, salary requirements)</li>
                <li>Work authorization status and preferences</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Submit job applications on your behalf</li>
                <li>Match roles to your criteria</li>
                <li>Track and report on application status</li>
                <li>Communicate with you about your job search</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share your information only as necessary to provide our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>With job boards and employers as part of the application process</li>
                <li>With service providers who assist in our operations (subject to confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of our services at any time</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
                <a href="mailto:privacy@rolerunner.com" className="text-sunset-600 hover:text-sunset-700 font-medium">
                  privacy@rolerunner.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
