import styles from './Menu.module.scss';
import { menu } from '../../utils';

const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menu.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Menu;
