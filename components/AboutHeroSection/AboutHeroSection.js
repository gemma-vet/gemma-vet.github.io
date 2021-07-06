import styles from './AboutHeroSection.module.scss';
import aboutHeader from '../../public/images/about-header-image@2x.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const AboutHeroSection = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.aboutHeroContainer}>
        <div className={styles.aboutHeroDescription}>
          <p className={styles.description}>
            With vets’ mission in mind and <br /> pets’ best interest at heart, <br /> we created Gemma, a smart, <br />{' '}
            secure, and easy-to-use mobile <br /> app tailored to your needs.
          </p>
          <Link href="/howItWorks" passHref>
            <Button background="white" border="borderTransparent" textColor="textGreen" type="button">
              See How it Works
            </Button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image src={aboutHeader} alt="two phones displaying Gemma app" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
