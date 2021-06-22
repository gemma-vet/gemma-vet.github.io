import styles from './BenefitsSection.module.scss';
import Link from 'next/link';
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
          <Link href="/howItWorks" passHref>
            <Button background="darkGreen" border="borderTransparent" textColor="textWhite" type="button">
              See How it Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
