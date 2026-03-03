import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - RoleRunner',
  description: 'RoleRunner Terms of Service',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-black text-5xl md:text-6xl text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-12">Last updated: February 11, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                RoleRunner provides job search execution services, including sourcing job opportunities, submitting applications on your behalf, and tracking application progress. We act as your authorized representative in the job application process.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Your Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the accuracy of your resume and other materials</li>
                <li>Authorize us to submit applications using your provided information</li>
                <li>Respond promptly to employer communications</li>
                <li>Notify us of any changes to your job search criteria or status</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Ethical Statement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to ethical job search practices:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We do not impersonate you. We apply using information you provide.</li>
                <li>We prioritize relevance and accuracy over volume.</li>
                <li>We filter applications to match your criteria and avoid spam.</li>
                <li>We comply with job board terms of service.</li>
                <li>We do not use automated bots or violate platform policies.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Service Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide excellent service, please understand:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We cannot guarantee job offers or interview requests</li>
                <li>Results vary based on market conditions, qualifications, and competition</li>
                <li>Some platforms may restrict third-party applications</li>
                <li>We are not responsible for employer decisions or hiring practices</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Payment and Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subscription details:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Payments are processed monthly in advance</li>
                <li>You may pause or cancel at any time with no penalties</li>
                <li>Refunds are prorated for the current billing period</li>
                <li>We will stop all application activity immediately upon cancellation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We treat your information as confidential and will not share it with third parties except as necessary to provide our services or as required by law. See our Privacy Policy for more details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                RoleRunner provides services on an "as is" basis. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these terms from time to time. We will notify you of significant changes via email. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="font-display font-bold text-2xl mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:rolerunner@gmail.com" className="text-sunset-600 hover:text-sunset-700 font-medium">
                  rolerunner@gmail.com
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
