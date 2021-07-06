import styles from './FeaturesSection.module.scss';
import { features } from '../../dataBase';
import Feature from '../Feature/Feature';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresSectionContainer}>
        <div className={styles.titleContainer}>
          <p className="sectionPreTitle">Features</p>
          <h2>Features for Vets That Go the Extra Mile</h2>
        </div>
        <div className={styles.featuresContainer}>
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
