import styles from './SectionBanner.module.scss';

const SectionBanner = ({ bannerInfo }) => {
  return (
    <div className={styles.sectionBanner}>
      <div className={styles.sectionBannerContainer}>
        <p className={`sectionPreTitle ${bannerInfo.preTitle === '' ? 'hidden' : ''}`}>{bannerInfo.preTitle}</p>
        <h3 className={bannerInfo.preTitle === '' ? `${styles.morePadding}` : ''}>{bannerInfo.title}</h3>
      </div>
    </div>
  );
};

export default SectionBanner;
