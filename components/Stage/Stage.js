import styles from './Stage.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LearnMore from '../LearnMore/LearnMore';

const Stage = ({ stage }) => {
  return (
    <div className={styles.stage}>
      <div className={styles.stageGrafic}>
        <div className={styles.imageContainer}>
          <Image src={stage.source} width={64} height={64} alt={stage.alt} layout="fixed" />
        </div>
        <div className={`${styles.verticalLine} ${stage.noLine ? 'hidden' : ''}`}></div>
      </div>
      <div className={styles.stageDescription}>
        <p className="sectionPreTitle">{stage.preTitle}</p>
        <h2>{stage.title}</h2>
        <p
          className={`${styles.stageText} ${stage.cta ? `${styles.noSpace}` : ''}`}
          dangerouslySetInnerHTML={{ __html: stage.description }}
        ></p>
        <div className={`${styles.ctaContainer} ${!stage.cta ? 'hidden' : ''}`}>
          <Link href='/howItWorks' passHref>
            <LearnMore>Learn More</LearnMore>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stage;
