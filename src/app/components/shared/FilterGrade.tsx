import React from 'react';
import Button from './Button';

const options = [
  {
    label: 'Любая3',
  },
  {
    label: 'S',
  },
  {
    label: '6',
  },
  {
    label: '5',
  },
  {
    label: '3',
  },
  {
    label: '4',
  },
  {
    label: 'M',
  },
];

export default function FilterGrade() {
  return (
    <div className="h-140 sm:h-220 space-y-2">
      <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
        <h4>Оценка</h4>
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
                {option.label.startsWith('Любая3') ? 'Любая' : option.label}
              </p>
            </label>
          ))}
        </div>
      </div>
      <div className="w-full grid place-content-center bg-white rounded-10 py-4">
        <Button blue className="h-8 !w-full">
          Применить
        </Button>
      </div>
    </div>
  );
}
