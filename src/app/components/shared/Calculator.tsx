import React from 'react';
import FilterModel from './FilterModel';
import TypeOfImport from '../pages/calculator/TypeOfImport';
import VehicleType from '../pages/calculator/VehicleType';
import Assembly from '../pages/calculator/Assembly';
import City from '../pages/calculator/City';
import CostOfVehicleInAuction from '../pages/calculator/CostOfVehicleInAuction';

export default function Calculator() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-7 gap-2">
      <TypeOfImport />
      <FilterModel />
      <VehicleType />
      <Assembly />
      <City />
      <CostOfVehicleInAuction />
    </div>
  );
}
