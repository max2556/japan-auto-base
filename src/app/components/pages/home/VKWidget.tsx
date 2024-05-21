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
      if (window.VK) {
        window.VK.init({
          apiId: 51926923,
        });

        window.VK.Widgets.Comments('vk_comments', {
          limit: 10,
          attach: '*',
        });
      }
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
