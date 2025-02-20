type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Extend the global Window interface
declare global {
  interface Window {
    gtag: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

export const trackEvent = ({ action, category, label, value }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for common events
export const trackDemoRequest = (source: string) => {
  trackEvent({
    action: 'demo_request',
    category: 'conversion',
    label: source,
  });
};

export const trackContactFormSubmission = (formType: string) => {
  trackEvent({
    action: 'contact_form_submission',
    category: 'engagement',
    label: formType,
  });
};

export const trackSolutionView = (solution: string) => {
  trackEvent({
    action: 'solution_view',
    category: 'content',
    label: solution,
  });
};

export const trackCareerApplication = (position: string) => {
  trackEvent({
    action: 'career_application',
    category: 'conversion',
    label: position,
  });
};

export const trackNewsletterSubscription = () => {
  trackEvent({
    action: 'newsletter_subscription',
    category: 'engagement',
    label: 'footer',
  });
};

export const trackSocialMediaClick = (platform: string) => {
  trackEvent({
    action: 'social_media_click',
    category: 'engagement',
    label: platform,
  });
};

export const trackDownload = (resourceName: string) => {
  trackEvent({
    action: 'resource_download',
    category: 'content',
    label: resourceName,
  });
};

export const trackSearch = (searchTerm: string) => {
  trackEvent({
    action: 'site_search',
    category: 'engagement',
    label: searchTerm,
  });
};

// Example usage:
// trackEvent({
//   action: 'button_click',
//   category: 'engagement',
//   label: 'demo_request',
// }); 