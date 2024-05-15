import React from 'react';

const options = [
  {
    label: 'Любой',
  },
  {
    label: 'Седан',
  },
  {
    label: 'Купе',
  },
  {
    label: 'Хэтчбек',
  },
  {
    label: 'Лифтбек',
  },
  {
    label: 'Универсал',
  },
  {
    label: 'Минивен',
  },
];

export default function FilterBodyType() {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип кузова</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-2.5 text-sm cursor-pointer"
          >
            <input type="checkbox" id={option.label} className="hidden" />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4">
              {option.label.startsWith('Любой2') ? 'Любой' : option.label}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}
