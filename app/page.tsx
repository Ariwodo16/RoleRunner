
'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import StepCard from '@/components/StepCard';
import PricingCard from '@/components/PricingCard';
import FeatureCard from '@/components/FeatureCard';
import FAQAccordion from '@/components/FAQAccordion';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', targetRoles: '', location: '', remote: 'remote',
    salary: '', workAuth: '', linkedin: '', resume: null as File | null,
    portfolio: '', platforms: [] as string[], notes: '', consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Call the API
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Application submitted successfully:', result);
        setFormSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            targetRoles: '',
            location: '',
            remote: 'remote',
            salary: '',
            workAuth: '',
            linkedin: '',
            resume: null,
            portfolio: '',
            platforms: [],
            notes: '',
            consent: false,
          });
        }, 3000);
      } else {
        console.error('Submission failed:', result);
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform) ? prev.platforms.filter(p => p !== platform) : [...prev.platforms, platform]
    }));
  };

  const faqItems = [
    { question: 'Do you need my login credentials?', answer: 'Not necessarily. We never require your passwords. However, if you are comfortable providing limited access, it can allow for smoother submissions and potentially better application accuracy on certain platforms. Your security and comfort always come first — we only proceed with account access if you explicitly approve it.' },
    { question: 'What platforms do you apply on?', answer: 'We primarily use LinkedIn, Indeed, ZipRecruiter, and direct company career sites. We can also work with other platforms based on your industry and preferences. During intake, we discuss which platforms make the most sense for your search.' },
    { question: 'How do you avoid spam applications?', answer: 'Every role is filtered against your criteria before application. We verify job descriptions match your target titles, salary range, location preferences, and required qualifications. We also skip low-quality postings, commission-only roles, and obvious scams.' },
    { question: 'What information do you need from me?', answer: 'After signup, you’ll complete a structured onboarding form where we collect everything needed to begin. This includes your resume, target job titles, location preferences, salary requirements, and any non-negotiables (such as remote-only roles or specific industries).  Optional materials like your LinkedIn URL, portfolio, cover letter templates, or preferred job platforms can also be submitted to strengthen your applications.'},//The form ensures we have all required details upfront so your applications are accurate and aligned from day one.' }
    { question: 'Can I pause my subscription anytime?', answer: 'Yes. Being on a weekly subscription, you are able to pause or cancel our services at any time with no penalties. If you get an offer or want to pause while interviewing, just let us know and we\'ll stop applications immediately.' },
    { question: 'Is this compliant with job board terms of service?', answer: 'We apply using the information you provide us, following each platform\'s application process. We don\'t impersonate you or use automated bots that violate terms of service. Our team manually reviews and submits applications on your behalf, similar to having an assistant help with your job search.' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl animate-float" style={{animationDelay:'1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {['✓ Targeted roles only', '✓ Daily tracking', '✓ Quality-controlled'].map(chip => (
                <div key={chip} className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">{chip}</div>
              ))}
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
              Your job search, <span className="text-gradient">executed at full speed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">RoleRunner handles targeted applications and tracking so you can focus on interviews.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#apply" size="lg">Apply for the Pilot →</Button>
              <Button href="#packages" variant="outline" size="lg">See Packages</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-medium">Trusted by busy professionals at:</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            {['Tech Companies','Startups','Analytics Firms','Consulting','Finance'].map(c=><div key={c} className="font-display font-bold text-lg text-gray-700">{c}</div>)}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Your <span className="text-gradient">Route</span> to Success</h2>
            <p className="text-xl text-gray-600">Five mile markers on your journey to landing the right role</p>
          </div>
          <div className="space-y-8">
            <StepCard number={1} title="Intake & Criteria Setup" description="We start by understanding your target roles, locations, salary requirements, and must-haves. This is your roadmap." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>}/>
            <StepCard number={2} title="Resume Versions & Templates" description="We organize your resume and create targeted versions if needed. Cover letter templates are crafted for quick customization." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}/>
            <StepCard number={3} title="Job Sourcing & Filtering" description="We search LinkedIn, Indeed, ZipRecruiter, and company sites daily. Only roles matching your criteria make the cut." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>}/>
            <StepCard number={4} title="Applications & Quality Assurance" description="We apply on your behalf with your materials, run keyword checks, and verify accuracy. No spam, no errors." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}/>
            <StepCard number={5} title="Weekly Reports & Optimization" description="Get a dashboard with all applications, response rates, and next steps. We optimize the route based on what's working." icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>}/>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-4 bg-gradient-to-br from-sand-50 to-sunset-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Choose Your <span className="text-gradient">Sprint Package</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pick the pace that matches your timeline. All packages focus on relevance and quality—not spam.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard name="Basic Runner" priceAmount="$70/week" description="Perfect for testing the waters" features={['100 applications per week','Pre-aligned job titles & locations','Weekly status updates','Application tracking sheet']} ctaText="Start Sprint"/>
            <PricingCard name="Targeted Pro" priceAmount="$89/week" description="For serious job seekers who want smarter applications — not just more applications." features={['100 highly targeted applications','Resume alignment adjustments (light optimization)','Job-fit filtering (experience level, pay range, remote/hybrid preference)','Priority sourcing','Advanced tracking dashboard','Weekly performance summary']} isPopular badge="MOST POPULAR" ctaText="Enter Target Lane"/>
            <PricingCard name="Elite Sprint" priceAmount="$350/month" description="For candidates who want a structured, data-driven job search engine working behind the scenes." features={['400 targeted applications per month','Resume positioning strategy guidance','Weekly reporting + monthly performance breakdown','Full tracking dashboard','Interview prep support', 'Priority Support']} ctaText="I am Usain Bolt" ctaHref="/contact"/>
            <PricingCard name="Premium Relay" priceAmount="Custom" description="Full-service execution" features={['Custom application volume','Recruiter outreach included','Keyword alignment reports','Company research briefs','Interview prep support','Dedicated account manager','Custom integrations']} ctaText="Book Consult" ctaHref="/contact"/>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto bg-white/60 rounded-2xl p-6 border border-sand-200"><strong>Quality Promise:</strong> We focus on relevance and quality—not spam. Every application is filtered against your criteria, and we verify accuracy before submission.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">What You Get in the <span className="text-gradient">Fast Lane</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>} title="Targeted Role Filtering" description="We only apply to roles that match your criteria—no wasted applications on poor fits or spam postings."/>
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>} title="Application Dashboard" description="See every application in one place with status, dates, company info, and notes—total transparency."/>
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>} title="Weekly Conversion Metrics" description="Track response rates, interview requests, and optimize your approach based on real data."/>
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>} title="Keyword Alignment" description="We check your resume against job descriptions to ensure you're highlighting the right skills and experience."/>
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>} title="Inbox-Friendly Updates" description="Get concise weekly summaries and real-time notifications without email overload."/>
            <FeatureCard icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>} title="Fast Turnaround" description="Applications start within 48 hours of onboarding. See activity within the first week."/>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-4 bg-gradient-to-br from-sky-50 to-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Built for <span className="text-gradient-blue">Measurable Progress</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{num:'100',label:'Avg. weekly applications',color:'from-sunset-500 to-sunset-600'},{num:'Weekly',label:'Detailed reporting',color:'from-sky-500 to-sky-600'},{num:'100%',label:'Quality checkpoints',color:'from-sand-500 to-sand-600'}].map((stat,i)=>(
              <div key={i} className="bg-white rounded-3xl p-8 shadow-xl text-center border border-sky-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div className="font-display font-black text-4xl mb-2">{stat.num}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <FAQAccordion items={faqItems}/>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 bg-gradient-to-br from-sunset-50 to-sand-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Apply for the <span className="text-gradient">Pilot Program</span></h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get you started within 48 hours</p>
          </div>
          {formSubmitted ? (
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center border-4 border-sunset-500">
              <div className="w-20 h-20 bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="font-display font-bold text-3xl mb-4">Application Received!</h3>
              <p className="text-gray-600 text-lg mb-6">Thanks for applying! We'll review your information and reach out within 24-48 hours to get your job search sprint started.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-sand-200">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label><input type="text" required value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="John Doe"/></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Email *</label><input type="email" required value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="john@example.com"/></div>
                </div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">Phone (Optional)</label><input type="tel" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="(555) 123-4567"/></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">Target Role Titles *</label><textarea required value={formData.targetRoles} onChange={e=>setFormData({...formData,targetRoles:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" rows={3} placeholder="e.g., Data Analyst, Business Analyst, Product Analyst"/></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Work Location Preference *</label><select required value={formData.remote} onChange={e=>setFormData({...formData,remote:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none"><option value="remote">Remote Only</option><option value="hybrid">Hybrid</option><option value="onsite">Onsite</option><option value="flexible">Flexible</option></select></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Location(s)</label><input type="text" value={formData.location} onChange={e=>setFormData({...formData,location:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="e.g., San Francisco, New York"/></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Minimum Salary (Optional)</label><input type="text" value={formData.salary} onChange={e=>setFormData({...formData,salary:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="e.g., $80,000"/></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Work Authorization (Optional)</label><input type="text" value={formData.workAuth} onChange={e=>setFormData({...formData,workAuth:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="e.g., US Citizen, H1B"/></div>
                </div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">LinkedIn URL</label><input type="url" value={formData.linkedin} onChange={e=>setFormData({...formData,linkedin:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="https://linkedin.com/in/yourprofile"/></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">Resume Upload *</label><input type="file" required accept=".pdf,.doc,.docx" onChange={e=>setFormData({...formData,resume:e.target.files?.[0]||null})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none"/><p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX format</p></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">Portfolio / GitHub (Optional)</label><input type="url" value={formData.portfolio} onChange={e=>setFormData({...formData,portfolio:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" placeholder="https://github.com/yourname"/></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-3">Preferred Platforms *</label><div className="grid grid-cols-2 md:grid-cols-4 gap-3">{['LinkedIn','Indeed','ZipRecruiter','Company Sites'].map(p=><label key={p} className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={formData.platforms.includes(p)} onChange={()=>handlePlatformToggle(p)} className="w-5 h-5 text-sunset-600 border-gray-300 rounded"/><span className="text-sm text-gray-700">{p}</span></label>)}</div></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label><textarea value={formData.notes} onChange={e=>setFormData({...formData,notes:e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-sunset-500 focus:outline-none" rows={4} placeholder="Any specific requirements, industries to avoid, or other details we should know..."/></div>
                <div className="bg-sand-50 rounded-2xl p-6 border-2 border-sand-200"><label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" required checked={formData.consent} onChange={e=>setFormData({...formData,consent:e.target.checked})} className="w-5 h-5 text-sunset-600 border-gray-300 rounded mt-1"/><span className="text-sm text-gray-700">I understand that RoleRunner will apply to jobs on my behalf using my provided criteria and materials. I confirm that all information provided is accurate and I authorize RoleRunner to submit applications on my behalf. *</span></label></div>
                <div className="pt-4"><Button type="submit" size="lg" className="w-full">Submit Application →</Button></div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-sunset-600 to-sunset-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-6">Ready to get back hours each week?</h2>
          <p className="text-xl mb-10 text-white/90">Let us handle the grunt work while you focus on interviews and career decisions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#apply" variant="secondary" size="lg">Apply for the Pilot</Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sunset-600">Book a 10-min Fit Check</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
