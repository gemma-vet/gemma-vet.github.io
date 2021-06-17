import styles from './MissionSection.module.scss';
import Image from 'next/image';
import LearnMore from '../LearnMore/LearnMore';
import Link from 'next/link';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionSectionContainer}>
        <div className={styles.missionTitleContainer}>
          <p className="sectionPreTitle">MISSION</p>
          <h2>Vets’ Go-to App for Owner Satisfaction and Efficient Communication</h2>
          <p>
            Gemma’s mission is to <strong>enhance the lives of veterinary providers and pet owners</strong> by keeping
            them connected, all from the convenience of a mobile device.
          </p>
        </div>
        <div className={styles.presentation}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/mission-image@2x.png"
              width={482}
              height={400}
              layout="responsive"
              alt="image of a dog in a veterinary center"
            />
          </div>
          <div className={styles.missionDescription}>
            <p>
              Our smart and easy-to-use software solution was designed to help everyone benefit from improved veterinary
              services. Gemma’s promise is to help:
            </p>
            <ul className={styles.benefits}>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p>Veterinarians improve efficiency and have more time for pet care;</p>
              </li>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p> Families stay connected with their pets and caregivers, and avoid anxiety;</p>
              </li>
              <li>
                <div className={styles.paw}>
                  <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
                </div>
                <p>Hospitals drive higher satisfaction scores and great client communications reviews.</p>
              </li>
            </ul>
            <Link href="/about" passHref>
              <LearnMore>Learn More</LearnMore>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
