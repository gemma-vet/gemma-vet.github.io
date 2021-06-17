import React from 'react';
import styles from './ShowMore.module.scss';
import Image from 'next/image';

const ShowMore = ({ handleShowMore, showMore, children }) => {
  return (
    <div className={styles.showMore} onClick={handleShowMore}>
      <p>{children}</p>
      {!showMore ? (
        <Image src="/svg/downArrow.svg" width={12} height={12} alt="down arrow icon" />
      ) : (
        <Image src="/svg/arrowUp.svg" width={12} height={12} alt="up arrow icon" />
      )}
    </div>
  );
};

export default ShowMore;
