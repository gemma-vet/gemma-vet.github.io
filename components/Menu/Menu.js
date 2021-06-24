import styles from './Menu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../dataBase';

const Menu = ({ mobile, handleClick }) => {
  const router = useRouter();
  return (
    <nav>
      <ul className={`${styles.menu} ${mobile ? `${styles.columnDisplay}` : ''}`}>
        {menu.map((item) => (
          <li key={item.id} onClick={handleClick}>
            <Link href={item.path}>
              <a className={router.asPath === item.path ? 'green' : ''}>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
