import styles from './Delete.module.scss';
import { useState } from 'react';
import Image from "next/legacy/image";
import emailjs from '@emailjs/browser';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import Button from '../../components/Button/Button';

const Delete = () => {
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
{/*
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      emailjs.sendForm('service_aux9q8h', 'deleteform', event.currentTarget, '7JhZZoK59ZPor12pY')
        .then((result) => {
          setData(reset);
          setFeedback({ success: true, message: 'Message sent successfully.' });
          setVisibility(true);
          setTimeout(() => {
            setVisibility(false);
          }, 5000);
        }, (error) => {
          setFeedback({ message: error.text });
          setVisibility(true);
          setTimeout(() => {
            setVisibility(false);
          }, 5000);
        });
    } catch (error) {
      console.log(`Error sending email ${error}`);
    }
  };
*/}

  const bannerInfo = {
    preTitle: 'Contact Us',
    title: 'Delete Account Request',
  };
  return (
    <Layout title="Delete" lightGreen textWhite>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.delete}>
        <div className={styles.deleteContainer}>
          <p>We respect your privacy. Do send us an email with your phone number used to sign-up.<br/><br/>
          Email to: <a href="mailto:hello@gemma.vet">hello@gemma.vet</a></p>
{/*
          <form onSubmit={handleSubmit} className={styles.deleteForm}>
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
              placeholder="How Can We Help?  Have Any Feedback?"
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
*/}
          <div className={styles.gemmaImage}>
            <Image src="/svg/bg_picture.svg" width={730} height={689} alt="gemma" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Delete;
