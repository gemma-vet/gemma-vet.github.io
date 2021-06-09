import styles from './MissionSection.module.scss';
import Image from 'next/image';
import Cta from '../Cta/Cta';

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionSectionContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/mission-image@2x.png"
            width={518}
            height={429}
            layout="responsive"
            alt="image of a dog in a veterinary center"
          />
        </div>
        <div className={styles.missionDescription}>
          <p className="sectionPreTitle">MISSION</p>
          <h2>Better Veterinary Medicine Through Owner Satisfaction.</h2>
          <p>
            Gemma Vet is a smart, secure, and easy-to-use software solution for pet care providers. Our mobile app helps
            vets and their teams:
          </p>
          <ul className={styles.benefits}>
            <li>
              <div className={styles.paw}>
                <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
              </div>
              <p>connect with pet owners with ease for happier patients and families;</p>
            </li>
            <li>
              <div className={styles.paw}>
                <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
              </div>
              <p> be more efficient and have more time for pet care;</p>
            </li>
            <li>
              <div className={styles.paw}>
                <Image src="/svg/paw_1.svg" width={20} height={18} layout="fixed" alt="an image of a dog paw " />
              </div>
              <p>promote teamwork to deliver great experiences and big smiles.</p>
            </li>
          </ul>
          <Cta>Learn More</Cta>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
