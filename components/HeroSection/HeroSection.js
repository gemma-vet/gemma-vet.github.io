import { Fragment } from 'react';
import styles from './HeroSection.module.scss';
import Image from "next/legacy/image";
import { appButtons } from '../../dataBase';
import AppButton from '../AppButton/AppButton';
import heroDesktop from '../../public/images/mobile_screenshot@2x.png';
import imageMobile from '../../public/images/header-image-mobile 2.png';

const HeroSection = () => {
  return (
    <Fragment>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionContainer}>
          <div className={styles.heroImageContainer}>
            <div className={styles.imageDesktop}>
              {/* <Image src={heroDesktop} alt="screenshot of the site desktop view" priority /> */}
              <img src="/images/mobile_screenshot@2x.png" alt="screenshot of the site desktop view" />
            </div>
          </div>

          <div className={styles.heroDescriptionContainer}>
            <div className={styles.heroDescription}>
              <h1>A Cutting Edge Communication Tool For Vets Who Click With Their Clients</h1>
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
              {/* <Image src={imageMobile} alt="screenshot of the site mobile view" priority /> */}
              <img src="/images/header-image-mobile 2.png" alt="screenshot of the site mobile view" />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.gemmaMission}>
        <div className={styles.gemmaMissionContainer}>
          <p>
            Gemma’s mission is to <strong>enhance the lives of both veterinary providers and pet owners</strong> by
            keeping them connected—all from the convenience of a mobile device.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
