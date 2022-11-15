import styles from './Privacy.module.scss';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import SectionBanner from '../../components/SectionBanner/SectionBanner';

const Privacy = () => {
  const bannerInfo = {
    preTitle: '',
    title: 'Gemma Vet Privacy Policy',
  };
  return (
    <Layout title="Privacy Policy" lightGreen textWhite>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.privacy}>
        <p className={styles.title}>
          <strong>Effective date: </strong>May 30th, 2021
        </p>{' '}
        <p>
          Please carefully read this Privacy Policy related to our mobile application and website services. It contains
          essential information that will help you understand what type of data we collect, how we collect it and why we
          need it.
        </p>
        <p className={styles.title}>
          <strong>Introduction:</strong>
        </p>
        <p>
          {' '}
          Gemma Vet is based in Washington, D.C. and our services are provided to you by Espresoh Tech LLC with
          headquarters in Washington DC, USA and engineering offices in Timisoara, Romania.
        </p>
        <p>
          Gemma Vet is committed to protecting the privacy and security of your Personal Data. The information you share
          with Gemma Vet enables us to develop relevant features in our mobile app and offer great experiences across
          all our other communication channels. In addition, the Personal Data we collect helps us adapt our services
          and employment opportunities to your demands and needs.
        </p>
        <p className={styles.title}>
          <strong>What types of personal data we collect:</strong>{' '}
        </p>
        <p>
          We believe that personal information should stay personal, and that’s why we only collect the minimum
          necessary info meant to help us improve the experience we deliver to customers, possible employees and all
          other stakeholders.
        </p>
        <p> The types of personal data we collect are:</p>
        <ul>
          <li>
            <strong>&gt; personal identification data</strong> such as name, e-mail address, phone number.
          </li>
          <li>
            <strong>&gt; non-identifying personal data </strong>such as IP address, cookies, referring URL, browser
            type, operating system, <br />
            <span className={styles.extraPadding}>site usage, and browsing history.</span>
          </li>
        </ul>
        <p>
          We do not correlate personal identification data with non-identifying personal data unless clearly specified
          at the moment of collection.
        </p>
        <p className={styles.title}>
          {' '}
          <strong>How we collect personal data:</strong>
        </p>
        <p>
          We collect personal data in various ways, whether directly through our mobile app or through our website’s
          contact or subscription forms.
        </p>
        <p>
          We also collect personal data indirectly when it comes to information collected automatically through cookies
          in your browser and triggered by third-party analytics tools such as Google Analytics, Mailchimp or Facebook
          Pixel.
        </p>
        <p className={styles.title}>
          <strong>We collect data directly when you:</strong>
        </p>
        <ul>
          <li> &gt; sign up and create an account in our mobile app;</li>
          <li> &gt; invite team members to join our mobile app;</li>
          <li> &gt; share updates with other phone contacts using our mobile app;</li>
          <li> &gt; send us a message through the contact forms on our website;</li>
          <li>
            &gt; voluntarily complete a customer survey or provide feedback on any of our message boards or via email;
          </li>
          <li>&gt; contact us by any communication means, be it email, social media or website.</li>
        </ul>
        <p className={styles.title}>
          <strong>We collect data indirectly when you:</strong>
        </p>
        <ul>
          <li>
            &gt; visit our website; in this case, embedded web technologies known as cookies collect non-identifying{' '}
            <br />
            <span className={styles.extraPadding}>
              personal data (please read more on our{' '}
              <Link href="https://www.e-spres-oh.com/cookiePolicy">

                <span className="green">Cookie policy</span>

              </Link>
              )
            </span>
          </li>
        </ul>
        <p>
          To keep things transparent, you will always be notified when data collection occurs and you’ll be asked for
          consent.
        </p>
        <p className={styles.title}>
          <strong>What is your personal data used for?</strong>
        </p>
        <p>
          We use your personal data in your best interest. By analyzing the personal data we collect we can extract
          meaningful statistics that will further help us fine-tune the relevancy of the messages we deliver, the
          features we develop for our mobile app, and the experiences we offer on our website and other communications
          channels.
        </p>
        <ul>
          <li> &gt; to answer queries submitted through our contact forms; </li>
          <li>
            &gt; keep you posted on the latest features, software updates, fixes, or other information through emails
            and <br />
            <span className={styles.extraPadding}>newsletters;</span>{' '}
          </li>
          <li>&gt; optimize Facebook and LinkedIn ads based on collected anonymized data;</li>
          <li>
            &gt; build targeted audiences for social media campaigns to ensure the relevancy of our communications;
          </li>
          <li> &gt; create statistics around website traffic, marketing performance, communication initiatives;</li>
          <li> &gt; understand your current experience with our mobile app and website in order to improve it.</li>
        </ul>
        <p className={styles.title}>
          <strong>Third-party services we use:</strong>
        </p>
        <p>
          We do not sell your personal data to any third-party services. The personal data you agree to share with us is
          used in collaboration with third-party tools only to send you messages or improve ad targeting and user
          experience. Here is a list of the GDPR compliant third-party services we use:
        </p>
        <ul>
          <li>
            <strong>&gt; Google Analytics;</strong>
          </li>
          <li>
            <strong>&gt; MailChimp;</strong>
          </li>
          <li>
            <strong>&gt; Facebook; </strong>
          </li>
          <li>
            <strong>&gt; LinkedIn. </strong>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Privacy;
