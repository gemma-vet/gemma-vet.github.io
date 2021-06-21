import styles from './Button.module.scss';
import React from 'react';

const Button = React.forwardRef(({ onClick, href, ...props }, ref) => {
  const { background, border, textColor, type, children } = props;
  return (
    <a onClick={onClick} href={href} ref={ref}>
      <button type={type} className={`${styles.button} ${styles[background]} ${styles[border]} ${styles[textColor]}`}>
        <p className="buttonText">{children}</p>
      </button>
    </a>
  );
});

export default Button;
