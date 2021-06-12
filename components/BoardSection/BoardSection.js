import styles from './BoardSection.module.scss';
import SectionBanner from '../SectionBanner/SectionBanner';
import BoardTemplate from '../BoardTemplate/BoardTemplate';
import Button from '../Button/Button';
import { boardTemplates } from '../../utils';

const BoardSection = () => {
  const bannerInfo = {
    preTitle: 'Board Testimonials',
    title: 'Inspired by Vets for Vets',
  };
  return (
    <section className={styles.boardSection}>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.boardSectionContainer}>
        {boardTemplates.map((template) => (
          <BoardTemplate template={template} />
        ))}
        <div className={styles.buttonContainer}>
          <Button background="white" border="borderGreen" textColor="textGreen">
            Meet Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
