import styles from './About.module.scss';
import Layout from '../../components/Layout/Layout';
import AboutHeroSection from './components/AboutHeroSection/AboutHeroSection';
import DownloadBanner from '../../components/DownloadBanner/DownloadBanner';
import AboutPresentationSection from './components/AboutPresentationSection/AboutPresentationSection';

const About = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <AboutPresentationSection />
      <DownloadBanner />
    </Layout>
  );
};

export default About;
