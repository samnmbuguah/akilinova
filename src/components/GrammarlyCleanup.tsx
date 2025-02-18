'use client';
import { useEffect } from 'react';

export default function GrammarlyCleanup() {
  useEffect(() => {
    const cleanup = () => {
      const body = document.body;
      if (body) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes') {
              if (mutation.attributeName?.startsWith('data-gr-')) {
                body.removeAttribute(mutation.attributeName);
              }
            }
          });
        });

        observer.observe(body, {
          attributes: true,
          attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
        });

        // Initial cleanup
        body.removeAttribute('data-new-gr-c-s-check-loaded');
        body.removeAttribute('data-gr-ext-installed');

        return () => observer.disconnect();
      }
    };

    // Run cleanup after hydration
    if (document.readyState === 'complete') {
      cleanup();
    } else {
      window.addEventListener('load', cleanup);
      return () => window.removeEventListener('load', cleanup);
    }
  }, []);

  return null;
} 