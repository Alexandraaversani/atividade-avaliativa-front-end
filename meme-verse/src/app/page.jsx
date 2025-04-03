// import styles from './page.module.css'
import Header from './components/header';
import HeroSection from './components/heroSection';
import CategorieSection from './components/categorieSection';
import MemeCard from './components/memeCard';
import Sidebar from './components/sidebar';
import InteractionBar from './components/interactionBar';
import Footer from './components/footer';



export default function Home() {
  return (
    <div >
      <Header />
      <HeroSection />
      <CategorieSection />
      <MemeCard />
      <Sidebar />
      <InteractionBar />
      <Footer />

   
      
    </div>
  );
}
