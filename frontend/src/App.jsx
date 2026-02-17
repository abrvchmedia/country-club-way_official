import { Analytics } from '@vercel/analytics/react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Townhomes from './components/Townhomes';
import Documents from './components/Documents';
import ScheduleTour from './components/ScheduleTour';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Welcome />
      <Townhomes />
      <Documents />
      <ScheduleTour />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
