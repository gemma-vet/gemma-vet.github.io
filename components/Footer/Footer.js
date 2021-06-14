import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.infos}>
            <div className={styles.imageContainer}>
              <Link href="/">
                <Image src="/svg/Logo_Gemma.svg" width={189} height={40} alt="logo" layout="fixed" />
              </Link>
            </div>
            <div className={styles.socials}>
              <div className={styles.instaContainer}>
                <Image src="/svg/insta_icon.svg" width={32} height={32} alt="instagram icon" layout="fixed" />
              </div>
              <div className={styles.linkedContainer}>
                <Image src="/svg/linkedin_icon.svg" width={32} height={32} alt="linkedIn icon" layout="fixed" />
              </div>
              <div className={styles.twitterContainer}>
                <Image src="/svg/twitter-icon.svg" width={32} height={32} alt="twitter icon" layout="fixed" />
              </div>
            </div>
            <ul className={styles.footerMenu}>
              <li role="button">About</li>
              <li role="button">How it works</li>
              <li role="button">Contact us</li>
              <li role="button">Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.newsLetter}>
            <h4>Subscribe to Newsletter</h4>
            <p className={styles.newsLetterText}>
              Join our <span className={styles.boldText}>one-of-a-kind community</span> and Stay Up to date with the
              latest features
            </p>
            <input type="email" placeholder="Enter your e-mail" />
            <div className={styles.newsLetterButton}>
              <Button background="white" border="borderGreen" textColor="textGreen">
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.contact}>
            <h4>Ready to Meet Gemma?</h4>
            <input type="email" placeholder="Enter your e-mail" />
            <div className={styles.textareaContainer}>
              <textarea className={styles.contactText} name="contactText" placeholder="Share your thoughts with us" />
            </div>
            <div className={styles.contactButton}>
              <Button background="darkGreen" border="borderTransparent" textColor="textWhite">
                Send Message
              </Button>
            </div>
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
