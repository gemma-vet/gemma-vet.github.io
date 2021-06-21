import styles from './Menu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../dataBase';

const Menu = () => {
  const router = useRouter();
  return (
    <nav className={styles.menu}>
      {menu.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a className={router.asPath === item.path ? 'green' : ''}>{item.name}</a>
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Menu;
