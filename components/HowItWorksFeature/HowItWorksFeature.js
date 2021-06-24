import styles from './HowItWorksFeature.module.scss';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { lightGrey } from '../../utils';
const HowItWorksFeature = ({ feature }) => {
  const featureRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    checkMatch();
  });
console.log(feature);
  const checkMatch = () => {
    if (router.query.ref === feature.passingRef) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className={`${styles.howItWorksFeature}`} ref={featureRef}>
      <div className={`${styles.wrapper}  ${feature.background === lightGrey ? `${styles.light}` : `${styles.dark}`}`}>
        <div className={`${styles.howItWorksFeatureContainer}`}>
          <div
            className={`${styles.imageContainer} 
            ${feature.order === 0 ? `${styles.first}` : `${styles.second}`}
            ${feature.order === 0 ? `${styles.positionStart}` : `${styles.positionEnd}`}
            `}
          >
            <Image
              src={feature.source.src}
              width={feature.dimensions.width}
              height={feature.dimensions.height}
              blurDataURL={feature.source.blurDataURL}
              placeholder="blur"
              alt="a phone picture"
              loading="eager"
            />
          </div>
          <div className={styles.description}>
            <h2>{feature.title}</h2>
            <ul className={styles.descriptionList}>
              {feature.list.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: `${feature.paragraph_one}` }}></p>
            <p>{feature.paragraph_two}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFeature;
