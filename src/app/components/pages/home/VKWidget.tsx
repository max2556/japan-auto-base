'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    VK: any;
  }
}

const loadVKScript = (): HTMLScriptElement => {
  const script = document.createElement('script');
  script.src = 'https://vk.com/js/api/openapi.js?169';
  script.async = true;
  document.body.appendChild(script);
  return script;
};

const VKWidget: React.FC = () => {
  useEffect(() => {
    const script = loadVKScript();

    script.onload = () => {
      console.log('VK script loaded.');
      if (window.VK) {
        console.log('VK object found.');

        // Initialize VK with your App ID
        window.VK.init({
          apiId: 51926923, // Replace with your VK App ID
        });

        window.VK.Widgets.Comments('vk_comments', {
          limit: 10,
          attach: '*',
        });
      } else {
        console.error('VK object not found.');
      }
    };

    script.onerror = () => {
      console.error('Failed to load VK script.');
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="vk-reviews" className="bg-white">
      <div className="max-w-base mx-auto px-5">
        <div id="vk_comments"></div>
      </div>
    </section>
  );
};

export default VKWidget;
