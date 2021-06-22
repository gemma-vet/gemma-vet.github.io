import styles from './BoardSection.module.scss';
import Link from 'next/link';
import SectionBanner from '../SectionBanner/SectionBanner';
import BoardTemplate from '../BoardTemplate/BoardTemplate';
import Button from '../Button/Button';
import { boardTemplates } from '../../dataBase';

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
          <BoardTemplate key={template.id} template={template} />
        ))}
        <div className={styles.buttonContainer}>
          <Link href="/about" passHref>
            <Button background="white" border="borderGreen" textColor="textGreen" type="button">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
