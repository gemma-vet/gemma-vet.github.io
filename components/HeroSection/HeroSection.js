import styles from './HeroSection.module.scss';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/mobile_screenshot@2x.png"
            width={1366}
            height={668}
            layout="responsive"
            alt="screenshot of the site mobile view"
          />
        </div>

        <div className={styles.heroDescriptionContainer}>
          <div className={styles.heroDescription}>
            <h1>Helping You Deliver Remarkable Veterinary Care</h1>
            <p>
              Smarter and better client communication for vets and their teams. Your mobile app for happier pet
              families.
            </p>
            <div className={styles.apps}>
              <div className={styles.appStore}>
                <Image src="/svg/appStore.svg" width={169} height={57} alt="app store icon" />
              </div>
              <div className={styles.googlePlay}>
                <Image src="/svg/googlePlay.svg" width={182} height={57} alt="google play icon" />
              </div>
            </div>
          </div>
          <div className={styles.dummyDiv}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;