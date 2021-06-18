import styles from './HowItWorks.module.scss';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';

const HowItWorks = () => {
  const bannerInfo = {
    preTitle: 'How it works',
    title: 'Features For Vets That Go The Extra Mile',
  };
  return (
    <Layout>
      <SectionBanner bannerInfo={bannerInfo} />
    </Layout>
  );
};

export default HowItWorks;
