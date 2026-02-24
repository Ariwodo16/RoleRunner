'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyInline() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <InlineWidget
        url="https://calendly.com/rolerunner/30min"
       // https://calendly.com/YOUR_CALENDLY_USERNAME/10min-fit-check"
        styles={{ height: '620px' }}
        pageSettings={{
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'ea570c',
        }}
      />
    </div>
  );
}