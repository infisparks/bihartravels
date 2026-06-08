/**
 * Utility function to trigger Google Ads conversion tracking.
 * Specifically tracks the Contact/Lead conversion event.
 */
export const trackConversion = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18221151440/9aYZCOW007ocENDpwvBD'
      });
      console.log('Google Ads Conversion event sent successfully.');
    } catch (error) {
      console.error('Failed to track Google Ads conversion event:', error);
    }
  } else {
    console.warn('Google Analytics/Ads (gtag) is not initialized or window is undefined.');
  }
};
