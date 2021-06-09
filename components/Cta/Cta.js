import styles from './Cta.module.scss';
import Image from 'next/image';

const Cta = ({ children }) => {
  return (
    <div className={styles.cta}>
      <p>{children}</p>
      <Image src="/svg/learnMore_cta.svg" width={12} height={12} alt="next arrow icon" />
    </div>
  );
};

export default Cta;
