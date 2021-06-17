import styles from './Home.module.scss';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import DownloadBanner from '../components/DownloadBanner/DownloadBanner';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import BoardSection from '../components/BoardSection/BoardSection';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Gemma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <DownloadBanner textOne />
      <FeaturesSection />
      <TestimonialsSection />
      <BoardSection />
      <DownloadBanner />
    </Layout>
  );
};

export default Home;
