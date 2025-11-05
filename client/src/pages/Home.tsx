import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import BlueHighlight from '@/components/BlueHighlight';
import BenefitsWithPhone from '@/components/BenefitsWithPhone';
import YellowCTA from '@/components/YellowCTA';
import HowToReceive from '@/components/HowToReceive';
import BonusCards from '@/components/BonusCards';
import PricingPlans from '@/components/PricingPlans';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesSection />
      <BlueHighlight />
      <BenefitsWithPhone />
      <YellowCTA />
      <HowToReceive />
      <BonusCards />
      <PricingPlans />
      <FAQ />
      <Footer />
    </div>
  );
}
