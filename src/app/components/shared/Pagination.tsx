import React from 'react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-bold text-brand-dark mt-4">
      {/* Navigating Button Left */}
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-brand-gray-100 rounded-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-brand-dark/50"
        >
          <path d="M13.7438 5.79313C14.1396 5.36539 14.8159 5.36539 15.2117 5.79313L15.3722 5.96654C15.7266 6.34956 15.7269 6.94074 15.3729 7.32414L11.6817 11.3216C11.328 11.7047 11.328 12.2953 11.6817 12.6784L15.3729 16.6759C15.7269 17.0593 15.7266 17.6504 15.3722 18.0335L15.2117 18.2069C14.8159 18.6346 14.1396 18.6346 13.7438 18.2069L8.62852 12.6792C8.2738 12.2959 8.2738 11.7041 8.62852 11.3208L13.7438 5.79313Z" />
        </svg>
      </button>
      {/* Page Buttons */}
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-brand-dark text-white rounded-5">
        1
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-white rounded-5 hover:bg-brand-dark hover:text-white transition-all duration-200">
        2
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-white rounded-5 hover:bg-brand-dark hover:text-white transition-all duration-200">
        3
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-white rounded-5 hover:bg-brand-dark hover:text-white transition-all duration-200">
        4
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-white rounded-5 hover:bg-brand-dark hover:text-white transition-all duration-200">
        5
      </button>
      {/* Navigating Button Right */}
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-brand-gray-100 rounded-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-brand-dark"
        >
          <path d="M10.2562 5.79313C9.8604 5.36539 9.18414 5.36539 8.78831 5.79313L8.62784 5.96654C8.2734 6.34956 8.27307 6.94074 8.6271 7.32414L12.3183 11.3216C12.672 11.7047 12.672 12.2953 12.3183 12.6784L8.6271 16.6759C8.27308 17.0593 8.2734 17.6504 8.62784 18.0335L8.78831 18.2069C9.18414 18.6346 9.8604 18.6346 10.2562 18.2069L15.3715 12.6792C15.7262 12.2959 15.7262 11.7041 15.3715 11.3208L10.2562 5.79313Z" />
        </svg>
      </button>
    </div>
  );
}
