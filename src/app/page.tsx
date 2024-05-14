import Catalog from './components/pages/home/Catalog';
import Hero from './components/pages/home/Hero';
import OnlieAuction from './components/pages/home/OnlieAuction';
import SalesHistory from './components/pages/home/SalesHistory';

export default function Home() {
  return (
    <div>
      <Hero />
      <OnlieAuction />
      <Catalog />
      <SalesHistory />
    </div>
  );
}
