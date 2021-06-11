import styles from './Feature.module.scss';
import Image from 'next/image';
import Cta from '../Cta/Cta';

const Feature = ({ feature }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.imageContainer}>
        <Image src={feature.source} width={64} height={64} alt={feature.alt} layout="fixed" />
      </div>
      <div className={styles.featureDescription}>
        <h4>{feature.title}</h4>
        <p>{feature.description}</p>
        <Cta>Learn More</Cta>
      </div>
    </div>
  );
};

export default Feature;
