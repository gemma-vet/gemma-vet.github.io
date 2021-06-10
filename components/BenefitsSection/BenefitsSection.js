import styles from './BenefitsSection.module.scss';
import SectionBanner from '../SectionBanner/SectionBanner';

const BenefitsSection = () => {
  const bannerInfo = {
    preTitle: 'Benefits',
    title: 'Meet Gemma',
  };
  return (
    <section className={styles.benefitsSection}>
      <SectionBanner bannerInfo={bannerInfo} />
    </section>
  );
};

export default BenefitsSection;
