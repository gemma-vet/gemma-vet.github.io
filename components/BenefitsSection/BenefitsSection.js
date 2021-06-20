import styles from './BenefitsSection.module.scss';
import SectionBanner from '../SectionBanner/SectionBanner';
import Benefit from '../Benefit/Benefit';
import Button from '../Button/Button';
import { benefits } from '../../dataBase';

const BenefitsSection = () => {
  const bannerInfo = {
    preTitle: 'Benefits',
    title: 'Meet Gemma',
  };
  return (
    <section className={styles.benefitsSection}>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.benefitsSectionContainer}>
        {benefits.map((benefit) => (
          <Benefit key={benefit.id} benefit={benefit} />
        ))}
        <div className={styles.buttonContainer}>
          <Button background="darkGreen" border="borderTransparent" textColor="textWhite">
            See How it Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
