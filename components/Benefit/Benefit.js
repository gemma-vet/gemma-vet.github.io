import styles from './Benefit.module.scss';
import Image from 'next/image';

const Benefit = ({ benefit }) => {
  return (
    <div className={styles.benefit}>
      <div className={`${styles.benefitDescription} ${benefit.first === 0 ? `${styles.first}` : `${styles.second}`}`}>
        <h2>{benefit.title}</h2>
        <p>{benefit.description}</p>
      </div>
      <div className={styles.benefitImage}>
        <Image
          src={benefit.source}
          width={benefit.dimensions.width}
          height={benefit.dimensions.height}
          alt={benefit.alt}
        />
      </div>
    </div>
  );
};

export default Benefit;
