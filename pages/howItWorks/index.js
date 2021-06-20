import styles from './HowItWorks.module.scss';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import { howItWorksStages } from '../../dataBase';
import HowItWorksFeature from '../../components/HowItWorksFeature/HowItWorksFeature';

const HowItWorks = () => {
  const bannerInfo = {
    preTitle: 'How it works',
    title: 'Features For Vets That Go The Extra Mile',
  };
  return (
    <Layout lightGreen textWhite>
      <div className={styles.bannerContainer}>
        <SectionBanner bannerInfo={bannerInfo} />
      </div>
      {howItWorksStages.map((feature) => (
        <HowItWorksFeature key={feature.id} feature={feature} />
      ))}
    </Layout>
  );
};

export default HowItWorks;
