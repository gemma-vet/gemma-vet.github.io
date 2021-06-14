import styles from './AboutHeroSection.module.scss';
import Image from 'next/image';
import Button from '../../../../components/Button/Button';

const AboutHeroSection = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.aboutHeroContainer}>
        <div className={styles.aboutHeroDescription}>
          <p className={styles.description}>
            With vets’ mission in mind and <br /> pets’ best interest at heart, <br /> we created Gemma, a smart, <br />{' '}
            secure, and easy-to-use mobile <br /> app tailored to your needs.
          </p>
          <Button background="white" border="borderTransparent" textColor="textGreen">
            See How it Works
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/about-header-image@2x.png"
            width={670}
            height={446}
            alt="two phones displaying Gemma app"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
