'use client';

import React, { createContext, useContext, useState } from 'react';

interface FilterContextValue {
  brandSelected: boolean;
  handleBrandSelect: (brand: string) => void;
}

interface FilterContextProps {
  children: React.ReactNode;
}

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterContextProvider');
  }

  return context;
};

export default function FilterContextProvider({
  children,
}: FilterContextProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function handleBrandSelect(brand: string) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }

    console.log(selectedBrands.length);
  }

  const value: FilterContextValue = {
    brandSelected: selectedBrands.length > 0,
    handleBrandSelect,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
