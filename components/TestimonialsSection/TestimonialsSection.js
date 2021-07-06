import styles from './TestimonialsSection.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionBanner from '../SectionBanner/SectionBanner';
import Testimonial from '../Testimonial/Testimonial';
import NavBullet from '../NavBullet/NavBullet';
import Button from '../Button/Button';
import { testimonials, bullets } from '../../dataBase';

const TestimonialsSection = () => {
  const [increment, setIncrement] = useState(0);
  const [fade, setFade] = useState(false);
  const [startX, setStartX] = useState('');
  const swipeLimit = 50;

  const bannerInfo = {
    preTitle: 'TESTIMONIALS',
    title: 'Increased Owner Satisfaction, Guaranteed',
  };

  const quoteClick = () => {
    if (increment < testimonials.length - 1) {
      setIncrement(increment + 1);
      setFade(true);
    } else {
      setIncrement(0);
    }
    setTimeout(() => {
      setFade(false);
    }, 200);
  };

  const bulletClick = (bullet) => {
    setIncrement(bullet);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 300);
  };

  const startTouch = (event) => {
    const { touches } = event;
    if (touches && touches.length === 1) {
      const touch = touches[0];
      setStartX(touch.clientX);
    }
  };

  const endTouch = (event) => {
    const finishingTouch = event.changedTouches[0].clientX;
    if (startX < finishingTouch - swipeLimit) {
      if (increment < testimonials.length - 1) {
        setIncrement(increment + 1);
        setFade(true);
      } else {
        setIncrement(0);
      }
    } else if (startX > finishingTouch + swipeLimit) {
      if (increment > 0) {
        setIncrement(increment - 1);
        setFade(true);
      } else {
        setIncrement(testimonials.length - 1);
      }
    }
    setTimeout(() => {
      setFade(false);
    }, 200);
  };

  return (
    <section className={styles.testimonialsSection}>
      <SectionBanner bannerInfo={bannerInfo} />
      <div className={styles.testimonialsSectionContainer}>
        <div className={styles.testimonialsContainer}>
          <Testimonial
            testimonial={testimonials[increment]}
            fade={fade}
            quoteClick={quoteClick}
            startTouch={startTouch}
            endTouch={endTouch}
          />
          <div className={styles.bigDiamond}>
            <Image src="/svg/bigDiamond.svg" width={111} height={122} alt="diamond icon" layout="fixed" />
          </div>
          <div className={styles.smallDiamond}>
            <Image src="/svg/smallDiamond.svg" width={90} height={99} alt="diamond icon" layout="fixed" />
          </div>
        </div>
        <div className={styles.testimonialsNav}>
          {bullets.map((bullet) => (
            <NavBullet key={bullet} bullet={bullet} increment={increment} fade={fade} bulletClick={bulletClick} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/contact" passHref>
            <Button background="white" border="borderGreen" textColor="textGreen" type="button">
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
