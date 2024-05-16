import React from 'react';
import FilterModel from '../../shared/FilterModel';
import TypeOfImport from './TypeOfImport';
import VehicleType from './VehicleType';
import Assembly from './Assembly';
import City from './City';
import CostOfVehicleInAuction from './CostOfVehicleInAuction';

export default function Calculator() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
      <TypeOfImport />
      <FilterModel />
      <VehicleType />
      <Assembly />
      <City />
      <CostOfVehicleInAuction />
    </div>
  );
}
