import styles from './Button.module.scss';

const Button = ({ children, ...props }) => {
  const { background, border, textColor } = props;
  return (
    <button className={`${styles.button} ${styles[background]} ${styles[border]} ${styles[textColor]}`}>
      <p className="buttonText">{children}</p>
    </button>
  );
};

export default Button;
