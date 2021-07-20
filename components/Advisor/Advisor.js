import styles from './Advisor.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ShowMore from '../ShowMore/ShowMore';

const Advisor = ({ advisor }) => {
  const ctaRef = useRef(null);
  const description = useRef(null);
  const quotes = useRef(null);
  const border = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [active, setActive] = useState(false);
  const [touchControl, setTouchControl] = useState(false);
  useEffect(() => {
    if (description.current.scrollHeight > 178) {
      setActive(true);
    }
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleOnMouseOver = () => {
    ctaRef.current.style.visibility = 'hidden';
    quotes.current.style.visibility = 'visible';
    description.current.style.visibility = 'hidden';
  };
  const handleOnMouseLeave = () => {
    ctaRef.current.style.visibility = 'visible';
    quotes.current.style.visibility = 'hidden';
    description.current.style.visibility = 'visible';
  };
  const handleTouchStart = () => {
    if (!touchControl) {
      border.current.style.borderWidth = '4px';
      handleOnMouseOver();
      setTouchControl(!touchControl);
    } else {
      border.current.style.borderWidth = '0';
      handleOnMouseLeave();
      setTouchControl(!touchControl);
    }
  };

  return (
    <div className={styles.advisor}>
      <div
        onMouseOver={handleOnMouseOver}
        onMouseLeave={handleOnMouseLeave}
        onTouchStart={handleTouchStart}
        className={`${styles.imageContainer} ${styles.extraPadding} `}
      >
        <div className={styles.imageDivDesktop}>
          <div className={styles.imageBorder}></div>
          <Image src={advisor.source} width={200} height={200} alt="board member picture" layout="fixed" />
        </div>
        <div className={styles.imageDivMobile}>
          <div className={styles.imageBorder} ref={border}></div>
          <Image src={advisor.source} width={150} height={150} alt="board member picture" layout="fixed" />
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.templateDescription}>
          <div className={styles.authorContainer}>
            <h4>{advisor.author}</h4>
            <p className={styles.jobPosition}>{advisor.jobPositon}</p>
          </div>

          <div className={styles.quotesContainer} ref={quotes}>
            <div className={`${styles.quotesImage}`}>
              <Image src="/svg/quotes.svg" width={34} height={24} alt="quotes icon" layout="fixed" />
            </div>
            <p className={styles.quoteText}>{advisor.quote}</p>
          </div>
          <div className={`${styles.descriptionContainer} ${showMore ? `${styles.allContent}` : ''}`} ref={description}>
            <p className={styles.description}>{advisor.description}</p>
          </div>
        </div>
        <div className={styles.ctaContainer} ref={ctaRef}>
          {active && (
            <ShowMore showMore={showMore} handleShowMore={handleShowMore}>
              {!showMore ? ' Show More' : ' Show Less'}
            </ShowMore>
          )}
        </div>
      </div>
    </div>
  );
};

export default Advisor;
