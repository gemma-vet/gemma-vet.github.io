import styles from './AdvisorsSection.module.scss';
import SectionBanner from '../SectionBanner/SectionBanner';
import Advisor from '../Advisor/Advisor';
import { advisors } from '../../dataBase';

const AdvisorsSection = () => {
  const bannerInfo = {
    preTitle: 'Board of Advisors',
    title: 'Inspired by Vets for Vets',
  };
  return (
    <section className={styles.advisorsSection}>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.advisorsSectionContainer}>
        <h4 className={styles.advisorTitle}>
          From Gemma’s unique software solution to the app’s effortless user experience, meet the vets that have led the
          development process every step of the way.
        </h4>
        {advisors.map((advisor) => (
          <Advisor key={advisor.id} advisor={advisor} />
        ))}
      </div>
    </section>
  );
};

export default AdvisorsSection;
