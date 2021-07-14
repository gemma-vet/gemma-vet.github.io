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
          <Link key={item.id} href={item.path} passHref>
            <li onClick={handleClick}>
              <a className={router.asPath === item.path ? 'green' : ''}>{item.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
