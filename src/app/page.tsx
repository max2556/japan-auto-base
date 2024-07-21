import Catalog from './components/pages/home/Catalog';
import Delivery from './components/pages/home/Delivery';
import Hero from './components/pages/home/Hero';
import OnlieAuction from './components/shared/OnlieAuction';
import SalesHistory from './components/pages/home/SalesHistory';
import VKWidget from './components/pages/home/VKWidget';
import React from 'react';


export default function Home() {  
  return (
    <div>
      <Hero />
      <OnlieAuction />
      <Catalog />
      <SalesHistory />
      <VKWidget />
      <Delivery />
    </div>
  );
}
