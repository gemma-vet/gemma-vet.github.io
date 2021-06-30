import styles from './Footer.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const Footer = () => {
  const [visibility, setVisibility] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [data, setData] = useState({
    email: '',
    message: '',
  });

  const reset = {
    email: '',
    message: '',
  };
  const handleOnChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/footerContact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const succesCheck = await response.json();
      if (succesCheck.succes) {
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
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.infos}>
            <div className={styles.imageContainer}>
              <Link href="/" passHref>
                <a>
                  <Image src="/svg/Logo_Gemma.svg" width={189} height={40} alt="logo" layout="fixed" />
                </a>
              </Link>
            </div>
            <div className={styles.socials}>
              <div className={styles.instaContainer}>
                <Link href="https://www.instagram.com/gemma_vet/">
                  <a>
                    <Image src="/svg/insta_icon.svg" width={32} height={32} alt="instagram icon" layout="fixed" />
                  </a>
                </Link>
              </div>
              <div className={styles.linkedContainer}>
                <Link href="https://www.instagram.com/gemma_vet/">
                  <a>
                    <Image src="/svg/linkedin_icon.svg" width={32} height={32} alt="linkedIn icon" layout="fixed" />
                  </a>
                </Link>
              </div>
              <div className={styles.twitterContainer}>
                <Link href="https://twitter.com/gemma_vet">
                  <a>
                    <Image src="/svg/twitter-icon.svg" width={32} height={32} alt="twitter icon" layout="fixed" />
                  </a>
                </Link>
              </div>
            </div>
            <ul className={styles.footerMenu}>
              <li role="button">
                <Link href="/about">About</Link>
              </li>
              <li role="button">
                <Link href="/howItWorks">How it works</Link>
              </li>
              <li role="button">
                <Link href="/contact">Contact us</Link>
              </li>
              <li role="button">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.newsLetter}>
            <h4>Subscribe to Newsletter</h4>
            <p className={styles.newsLetterText}>
              Join our <span className={styles.boldText}>one-of-a-kind community</span> and Stay Up to date with the
              latest features
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" name="email" value={data.email} placeholder="Enter your e-mail" required />
              <div className={styles.newsLetterButton}>
                <Button background="white" border="borderGreen" textColor="textGreen" type="submit" required>
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className={styles.contact}>
            <h4>Ready to Meet Gemma?</h4>
            <form onSubmit={handleSubmit} className={styles.meetGemma} action="/api/footerContact">
              <input
                onChange={handleOnChange}
                type="email"
                name="email"
                value={data.email}
                placeholder="Enter your e-mail"
                required
              />
              <div className={styles.textareaContainer}>
                <textarea
                  onChange={handleOnChange}
                  className={styles.contactText}
                  name="message"
                  value={data.message}
                  placeholder="Share your thoughts with us"
                  required
                />
              </div>
              <div className={styles.contactButton}>
                <Button background="darkGreen" border="borderTransparent" textColor="textWhite" type="submit">
                  Send Message
                </Button>
              </div>
              {visibility ? (
                <div className={styles.feedback} style={feedback.succes ? { color: '#46815f' } : { color: 'red' }}>
                  {feedback.message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
        <div className={styles.footerSecondary}>
          <div className={styles.powered}>
            <p>
              Powered By{' '}
              <a className={styles.poweredLink} href="https://www.e-spres-oh.com/">
                [e-spres-oh]
              </a>
              .
            </p>
            <p>
              Learn more about [e-spres-oh]’s commitment to building{' '}
              <a
                className={styles.green}
                href="https://www.e-spres-oh.com/blog/posts/stepping-forward-for-the-healthcare-industry?blackVariant="
              >
                sofware products for the greater good.
              </a>
            </p>
          </div>
          <div className={styles.copyright}>
            <p>© 2021 Gemma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
