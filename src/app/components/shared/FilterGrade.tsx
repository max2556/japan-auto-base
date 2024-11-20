import React from "react";
import { Radio } from "./Radio";

const grades = ["1", "2", "3", "3.5", "4", "4.5", "5", "6", "R", "RA", "S"];

const options = grades.map((v) => ({ label: v, value: v }));

export interface FilterBrandProps {
  value: string;
  onChange: (value?: string) => void;
}

export default function FilterGrade({ value, onChange }: FilterBrandProps) {
  return (
    <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Оценка</h4>
      <Radio
        value={value}
        name="grade"
        options={options}
        onChange={onChange}
        needAnyOption
        anyOptionLabel="Любая"
      />
    </div>
  );
}
