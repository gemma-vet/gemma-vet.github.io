import styles from './Menu.module.scss';
import { menu } from '../../utils';
import Link from 'next/link';

const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menu.map((item) => (
        <li key={item.id}>
          {' '}
          <Link href={item.path}><a>{item.name}</a></Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
