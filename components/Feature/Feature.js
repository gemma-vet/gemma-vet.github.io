import styles from './Feature.module.scss';
import Image from 'next/image';
import LearnMore from '../LearnMore/LearnMore';
import Link from 'next/link';

const Feature = ({ feature }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.imageContainer}>
        <Image src={feature.source} width={64} height={64} alt={feature.alt} layout="fixed" />
      </div>
      <div className={styles.featureDescription}>
        <h4>{feature.title}</h4>
        <p className={styles.description}>{feature.description}</p>
        <Link href={{ pathname: '/howItWorks', query: { ref: feature.passingRef } }} passHref>
          <LearnMore>Learn More</LearnMore>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
