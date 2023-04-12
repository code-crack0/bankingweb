import WhyUs from '@/components/whyUs';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import About from '@/components/About';
import CTA from '@/components/CTA';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <About/>
      <Cards />
      <WhyUs />
      <CTA/>
      <Newsletter />
      <Footer />
    </div>
  )
}
