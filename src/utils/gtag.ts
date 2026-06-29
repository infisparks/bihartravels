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

/**
 * Tracks a WhatsApp message click.
 */
export const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      // Send a custom event for WhatsApp click
      (window as any).gtag('event', 'whatsapp_click', {
        'event_category': 'Contact',
        'event_label': 'WhatsApp Button Click',
        'value': 1
      });
      console.log('WhatsApp Click event sent successfully.');
      
      // Also send the standard conversion tracking event for compatibility
      trackConversion();
    } catch (error) {
      console.error('Failed to track WhatsApp click:', error);
    }
  } else {
    console.warn('Google Analytics/Ads (gtag) is not initialized or window is undefined.');
  }
};

/**
 * Tracks a Phone Call click.
 */
export const trackCallClick = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      // Send a custom event for Phone Call click
      (window as any).gtag('event', 'call_click', {
        'event_category': 'Contact',
        'event_label': 'Phone Call Button Click',
        'value': 1
      });
      console.log('Call Click event sent successfully.');
    } catch (error) {
      console.error('Failed to track Call click:', error);
    }
  } else {
    console.warn('Google Analytics/Ads (gtag) is not initialized or window is undefined.');
  }
};
