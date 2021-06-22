import styles from './Contact.module.scss';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import Button from '../../components/Button/Button';

const Contact = () => {
  const bannerInfo = {
    preTitle: 'Contact US',
    title: 'So Nice to Meet You',
  };
  return (
    <Layout title="Contact" lightGreen textWhite>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <form className={styles.contactForm}>
            <label htmlFor="name">Your Name:</label>
            <input id="name" type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="email">Your Email:</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="textarea"
              name="textarea"
              placeholder="
            How Can We Help? 
            Have Any Feedback?"
            />
            <div className={styles.buttonContainer}>
              <Button background="darkGreen" border="borderTransparent" textColor="textWhite" type="submit">
                Submit
              </Button>
            </div>
          </form>
          <div className={styles.gemmaImage}>
            <Image src="/svg/bg_picture.svg" width={730} height={689} alt="gemma" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
