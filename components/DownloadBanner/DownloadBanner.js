import styles from './DownloadBanner.module.scss';
import Image from 'next/image';

const DownloadBanner = () => {
  return (
    <div className={styles.downloadBanner}>
      <div className={styles.downloadBannerContainer}>
        <div className={styles.description}>
          <h4>
            Your veterinary practice, pet owners’ joy.
            <br />
            <span className={styles.download} role="button">
              Download the App
            </span>
          </h4>
        </div>
        <div className={styles.apps}>
          <Image src="/svg/appStore.svg" width={169} height={57} alt="app store icon" layout="fixed" />
          <Image src="/svg/googlePlay.svg" width={182} height={57} alt="google play icon" layout="fixed" />
        </div>
        <div className={styles.heartEmoji}>
          <Image src="/svg/heart_emoji.svg" width={94} height={79} alt="heart emoji" layout="fixed" />
        </div>
        <div className={styles.smileEmoji}>
          <Image src="/svg/smile_emoji.svg" width={94} height={79} alt="smile emoji" layout="fixed" />
        </div>
        <div className={styles.likeEmoji}>
          <Image src="/svg/like_emoji.svg" width={94} height={79} alt="like emoji" layout="fixed" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
