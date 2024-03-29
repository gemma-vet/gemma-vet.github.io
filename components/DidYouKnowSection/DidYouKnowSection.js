import styles from './DidYouKnowSection.module.scss';
import Image from "next/legacy/image";

const DidYouKnowSection = () => {
  return (
    <section className={styles.didYouKnowSection}>
      <div className={styles.didYouKnowContainer}>
        <div className={styles.question}>
          <Image src="/svg/Icon_didYouKnow.svg" width={64} height={64} alt="question icon" layout="fixed" />
        </div>
        <div className={styles.content}>
          <p className="sectionPreTitle">Did You Know?</p>
          <h2>Meet (the real-life) Gemma</h2>
          <div className={styles.description}>
            <div className={styles.descriptionImage}>
              <Image src="/images/Gemma_dog@2x.png" width={174} height={174} alt="gemma dog" layout="fixed" />
            </div>
            <p>
              Gemma, our very own muse, is a four-year-old golden retriever living in Washington, D.C. The beloved
              four-legged friend of one our advisory board members, Gemma, has been around since day one. A sweet and
              welcome distraction during our numerous virtual meetings, Gemma earned her seat at the table, inspiring us
              to innovate as we developed the #1 mobile veterinary app for client satisfaction.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;
