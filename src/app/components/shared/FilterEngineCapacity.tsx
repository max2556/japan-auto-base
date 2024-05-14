import React from 'react';

const options = [
  {
    label: 'Все обьемы',
  },
  {
    label: '0.7',
  },
  {
    label: '0.8',
  },
  {
    label: '1.0',
  },
  {
    label: '1.1',
  },
  {
    label: '1.2',
  },
  {
    label: '1.3',
  },
];

export default function FilterEngineCapacity() {
  return (
    <div className="h-220 space-y-2">
      <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-3 px-4">
        <h4>Обьем двигателя</h4>
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
      <div className="w-full grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="text"
          placeholder="Дата торогов"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark text-sm rounded-5 py-2 px-4"
        />
      </div>
    </div>
  );
}
