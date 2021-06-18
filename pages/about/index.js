import styles from './About.module.scss';
import Layout from '../../components/Layout/Layout';
import AboutHeroSection from '../../components/AboutHeroSection/AboutHeroSection';
import DownloadBanner from '../../components/DownloadBanner/DownloadBanner';
import AboutPresentationSection from '../../components/AboutPresentationSection/AboutPresentationSection';
import DidYouKnowSection from '../../components/DidYouKnowSection/DidYouKnowSection';
import AdvisorsSection from '../../components/AdvisorsSection/AdvisorsSection';

const About = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <AboutPresentationSection />
      <DidYouKnowSection />
      <AdvisorsSection />
      <DownloadBanner />
    </Layout>
  );
};

export default About;