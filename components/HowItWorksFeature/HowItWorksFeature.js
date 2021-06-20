import styles from './HowItWorksFeature.module.scss';
import Image from 'next/image';
import { lightGrey } from '../../utils';

const HowItWorksFeature = ({ feature }) => {
  return (
    <section className={`${styles.howItWorksFeature}`}>
      <div className={`${styles.wrapper}  ${feature.background === lightGrey ? `${styles.light}` : `${styles.dark}`}`}>
        <div className={`${styles.howItWorksFeatureContainer}`}>
          <div
            className={`${styles.imageContainer} 
            ${feature.order === 0 ? `${styles.first}` : `${styles.second}`}
            ${feature.order === 0 ? `${styles.positionStart}` : `${styles.positionEnd}`}
            `}
          >
            <Image
              src={feature.source}
              width={feature.dimensions.width}
              height={feature.dimensions.height}
              alt="a phone picture"
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
