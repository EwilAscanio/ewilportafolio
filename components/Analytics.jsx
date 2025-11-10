import { useEffect } from 'react';

// Google Analytics 4
const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 - reemplaza 'GA_MEASUREMENT_ID' con tu ID real
    const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // TODO: Reemplaza con tu ID de Google Analytics

    // Solo cargar si no está ya cargado
    if (!window.gtag) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(script2);
    }

    // Track page views
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, []);

  return null;
};

export default Analytics;
