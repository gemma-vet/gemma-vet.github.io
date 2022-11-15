import styles from './AboutSection.module.scss';
import missionImage from '../../public/images/mission-image@2x.png';
import Image from "next/legacy/image";
import Link from 'next/link';
import Button from '../Button/Button';

const AboutSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionSectionContainer}>
        <div className={styles.missionTitleContainer}>
          <p className="sectionPreTitle">ABOUT</p>
          <h2>Vets’ Go-to App to manage communication and owner satisfaction</h2>
        </div>
        <div className={styles.presentation}>
          <div className={styles.imageContainer}>
            {/* <Image src={missionImage} alt="image of a dog in a veterinary center" /> */}
            <img src="/images/mission-image@2x.png" alt="image of a dog in a veterinary center" />
          </div>
          <div className={styles.missionDescription}>
            <p className={styles.missionTitle}>
              Our easy-to-use software solution was designed to help everyone benefit from improved veterinary services.
            </p>
            <p>Gemma’s goal is to help:</p>
            <ul className={styles.benefits}>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p>Veterinarians improve efficiency so they have more time to handle activities related to pet care;</p>
              </li>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p> Families stay connected with their pets and caregivers, thereby reducing anxiety;</p>
              </li>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p>Hospitals improve satisfaction scores/client review ratings.</p>
              </li>
            </ul>
            <div className={styles.buttonContainer}>
              <Link href="/about" passHref legacyBehavior>
                <Button background="white" border="borderGreen" textColor="textGreen" type="button">
                  Find Out More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
