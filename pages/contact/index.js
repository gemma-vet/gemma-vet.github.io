import styles from './Contact.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [visibility, setVisibility] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const reset = {
    name: '',
    email: '',
    message: '',
  };
  const handleOnChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const succesCheck = await response.json();
      if (succesCheck.success) {
        setData(reset);
        setFeedback(succesCheck);
        setVisibility(true);
        setTimeout(() => {
          setVisibility(false);
        }, 2000);
      } else {
        setFeedback(succesCheck);
        setVisibility(true);
        setTimeout(() => {
          setVisibility(false);
        }, 2000);
      }
    } catch (error) {
      console.log(`Error sending email ${error}`);
    }
  };

  const bannerInfo = {
    preTitle: 'Contact US',
    title: 'So Nice to Meet You',
  };
  return (
    <Layout title="Contact" lightGreen textWhite>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm} action="/api/contact">
            <label htmlFor="name">Your Name:</label>
            <input
              onChange={handleOnChange}
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              required
            />
            <label htmlFor="email">Your Email:</label>
            <input
              onChange={handleOnChange}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              required
            />
            <label htmlFor="message">Your Message:</label>
            <textarea
              onChange={handleOnChange}
              id="message"
              name="message"
              placeholder="
            How Can We Help? 
            Have Any Feedback?"
              value={data.message}
              required
            />
            <div className={styles.buttonContainer}>
              <Button background="darkGreen" border="borderTransparent" textColor="textWhite" type="submit">
                Submit
              </Button>
            </div>
            {visibility ? (
              <div className={styles.feedback} style={feedback.success ? { color: '#46815f' } : { color: 'red' }}>
                {feedback.message}
              </div>
            ) : null}
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
