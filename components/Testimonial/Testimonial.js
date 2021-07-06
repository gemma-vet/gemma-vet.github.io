import styles from './Testimonial.module.scss';
import Image from 'next/image';

const Testimonial = ({ testimonial, fade, quoteClick, startTouch, endTouch }) => {
  return (
    <div
      className={styles.testimonial}
      onClick={quoteClick}
      onTouchStart={startTouch}
      onTouchEnd={endTouch}
      role="button"
    >
      <div className={styles.imageContainer}>
        <Image src="/svg/quotes.svg" width={34} height={24} alt="quotes icon" layout="fixed" />
      </div>
      <div className={`${fade ? 'fade-in' : ''} ${styles.testimonialDescription}`}>
        <p className={`quotes ${styles.quoteText} `}>{testimonial.quote}</p>
        <h4>{testimonial.author}</h4>
        <p className={styles.owner}>Pet Owner</p>
      </div>
    </div>
  );
};
export default Testimonial;
