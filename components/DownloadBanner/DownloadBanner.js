import styles from './DownloadBanner.module.scss';
import Image from 'next/image';
import { appButtons } from '../../dataBase';
import AppButton from '../AppButton/AppButton';
import heartEmoji from '../../public/svg/heart_emoji.svg';
import smileEmoji from '../../public/svg/smile_emoji.svg';
import likeEmoji from '../../public/svg/like_emoji.svg';

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
            <AppButton buttonInfo={appButtons.apple} />
          </div>
          <div className={styles.googlePlay}>
            <AppButton buttonInfo={appButtons.google} />
          </div>
          <div className={styles.heartEmoji}>
            <Image src={heartEmoji} alt="heart emoji" layout="responsive" />
          </div>
          <div className={styles.smileEmoji}>
            <Image src={smileEmoji} alt="smile emoji" layout="responsive" />
          </div>
          <div className={styles.likeEmoji}>
            <Image src={likeEmoji} alt="like emoji" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
