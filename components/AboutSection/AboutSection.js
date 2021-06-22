import styles from './AboutSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const AboutSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionSectionContainer}>
        <div className={styles.missionTitleContainer}>
          <p className="sectionPreTitle">ABOUT</p>
          <h2>Vets’ Go-to App for Owner Satisfaction and Easy Communication</h2>
        </div>
        <div className={styles.presentation}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/mission-image@2x.png"
              width={482}
              height={400}
              layout="responsive"
              alt="image of a dog in a veterinary center"
              priority="eager"
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
              <Button background="white" border="borderGreen" textColor="textGreen" type="button">
                Find Out More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
