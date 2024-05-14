import Catalog from './components/pages/home/Catalog';
import Hero from './components/pages/home/Hero';
import OnlieAuction from './components/pages/home/OnlieAuction';

export default function Home() {
  return (
    <div>
      <Hero />
      <OnlieAuction />
      <Catalog />
    </div>
  );
}
