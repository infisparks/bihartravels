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
export const trackCallClick = (urlOrEvent?: any) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      // Send a custom event for Phone Call click
      (window as any).gtag('event', 'call_click', {
        'event_category': 'Contact',
        'event_label': 'Phone Call Button Click',
        'value': 1
      });
      console.log('Call Click event sent successfully.');

      // Also trigger the Google Ads conversion events for Click to Call (1) and (2)
      const url = typeof urlOrEvent === 'string' ? urlOrEvent : undefined;
      if ((window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(url);
      } else {
        // Fallback for Click to call (2)
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18220328304/d7fWCPLR68ccEPDKkPBD',
          'value': 1.0,
          'currency': 'INR'
        });
        // Fallback for Click to call (1)
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-7666815030/Bm-eCLag6cccEPDKkPBD',
          'value': 1.0,
          'currency': 'INR'
        });
      }
      console.log('Google Ads Call Conversion events sent successfully.');
    } catch (error) {
      console.error('Failed to track Call click:', error);
    }
  } else {
    console.warn('Google Analytics/Ads (gtag) is not initialized or window is undefined.');
  }
};
