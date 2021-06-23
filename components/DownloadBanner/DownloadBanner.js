import styles from './DownloadBanner.module.scss';
import Image from 'next/image';

const DownloadBanner = ({ textOne, lightGreen, textWhite }) => {
  return (
    <div className={`${styles.downloadBanner} ${lightGreen ? `${styles.lightGreen}` : ''}`}>
      <div className={styles.downloadBannerContainer}>
        <div className={`${styles.description} ${textWhite ? `${styles.textWhite}` : ''}`}>
          <h4>
            {textOne
              ? 'Leave a mark on pets’ health and owners’ smiles.'
              : 'Your veterinary practice, pet owners’ joy.'}
            <br />
            <span className={`${styles.download} ${textWhite ? `${styles.textWhite}` : ''}`} role="button">
              Download the App
            </span>
          </h4>
        </div>
        <div className={styles.apps}>
          <div className={styles.appStore}>
            <Image src="/svg/appStore.svg" width={169} height={57} alt="app store icon" layout="fixed" />
          </div>
          <div className={styles.googlePlay}>
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
    </div>
  );
};

export default DownloadBanner;
