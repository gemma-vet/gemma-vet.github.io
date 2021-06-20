import styles from './AboutPresentationSection.module.scss';
import Stage from '../Stage/Stage';
import { stages } from '../../dataBase';

const AboutPresentationSection = () => {
  return (
    <section className={styles.aboutPresentation}>
      <div className={styles.aboutPresentationContainer}>
        {stages.map((stage) => (
          <Stage key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
};

export default AboutPresentationSection;
