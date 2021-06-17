import styles from './BoardTemplate.module.scss';
import Image from 'next/image';

const BoardTemplate = ({ template }) => {
  return (
    <div className={styles.boardTemplate}>
      <div className={`${styles.imageContainer} ${template.order === 0 ? `${styles.second}` : `${styles.first}`}`}>
        <Image src={template.source} width={200} height={200} alt="board member picture" layout="fixed" />
      </div>
      <div className={styles.templateDescription}>
        <div className={`${styles.quotesImage}`}>
          <Image src="/svg/quotes.svg" width={34} height={24} alt="quotes icon" layout="fixed" />
        </div>
        <div className={styles.templateText}>
          <p className={`quotes ${styles.quoteText} `}>{template.quote}</p>
          <h4>{template.author}</h4>
          <p className={styles.jobPosition}>
            {template.jobPositon} at <span className={styles.facility}>{template.facility}</span>
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default BoardTemplate;
