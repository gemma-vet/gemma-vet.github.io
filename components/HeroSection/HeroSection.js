import { Fragment } from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { appButtons } from '../../dataBase';
import AppButton from '../AppButton/AppButton';
import heroDesktop from '../../public/images/mobile_screenshot@2x.png';
import imageMobile from '../../public/images/header-image_v21.png';

const HeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionContainer}>
          <div className={styles.heroImageContainer}>
            <div className={styles.imageDesktop}>
              <Image src={heroDesktop} alt="screenshot of the site desktop view" loading="eager" />
            </div>
          </div>

          <div className={styles.heroDescriptionContainer}>
            <div className={styles.heroDescription}>
              <h1>Cutting Edge Communication Tool For Vets Who Click With Their Clients.</h1>
              <p>
                Smarter and better client communication for vets and their teams. Your mobile app for happier pet
                families.
              </p>
              <div className={styles.apps}>
                <div className={styles.appStore}>
                  <AppButton buttonInfo={appButtons.apple} />
                </div>
                <div className={styles.googlePlay}>
                  <AppButton buttonInfo={appButtons.google} />
                </div>
              </div>
            </div>
            <div className={styles.imageMobile}>
              <Image src={imageMobile} alt="screenshot of the site mobile view" loading="eager" />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.gemmaMission}>
        <div className={styles.gemmaMissionContainer}>
          <p>
            Gemma’s mission is to <strong>enhance the lives of veterinary providers and pet owners</strong> by keeping
            them connected, all from the convenience of a mobile device.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
