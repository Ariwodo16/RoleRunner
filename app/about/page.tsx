import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'About RoleRunner - Your Job Search Partner',
  description: 'Learn about RoleRunner\'s mission to make job searching organized, measurable, and less stressful.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-5xl md:text-6xl text-gray-900 mb-6">
            Why <span className="text-gradient">RoleRunner</span>?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe job searching should be organized, measurable, and—most importantly—less stressful.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gradient-to-br from-sand-50 to-sunset-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-sand-200">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Job searching is a numbers game—but it's also exhausting. Between sourcing roles, tailoring resumes, filling out applications, and tracking everything, the process eats up hours each week. For busy professionals, career switchers, and recent grads, this can feel overwhelming.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's where RoleRunner comes in. We handle the operational side of your job search: sourcing relevant roles, submitting applications, and tracking everything in one place. You stay in control of your criteria and materials—we just execute at full speed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal isn't to replace your judgment or spam hundreds of irrelevant applications. It's to give you back your time so you can focus on what matters: preparing for interviews, networking, and making informed career decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-4xl text-center mb-16">Our <span className="text-gradient">Core Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-2xl flex items-center justify-center text-white mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Quality Over Quantity</h3>
              <p className="text-gray-600">We filter every role against your criteria. No spam, no low-quality postings, no wasted applications.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center text-white mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Total Transparency</h3>
              <p className="text-gray-600">You see every application, every status update, and every metric. No black box, no surprises.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-sand-500 to-sand-600 rounded-2xl flex items-center justify-center text-white mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Speed & Efficiency</h3>
              <p className="text-gray-600">We move fast. Applications start within 48 hours, and you see weekly progress from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 to-sand-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-200">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6">The RoleRunner Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We're operations people. We love processes, metrics, and optimization. But we're also human—we know job searching is personal and can be stressful.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's why we use the route/sprint metaphor. Your job search is a journey, and we're here to help you cover ground quickly and efficiently. We handle the mile markers, track your progress, and help you adjust the route when needed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not here to promise overnight success or make unrealistic claims. We're here to give you back your time, provide clarity, and help you stay organized and motivated throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
            Ready to get your job search on track?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the pilot and let us handle the execution while you focus on landing the right role.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#apply" size="lg">
              Apply for the Pilot
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
