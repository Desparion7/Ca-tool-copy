import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../app/slice/colorModeSlice';
import styles from './Header.module.scss';
import Search from './Search';
import DesktopMenu from './DesktopMenu';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={`${styles.header} containter`}>
      <div className={styles.header__top}>
        <div className={styles['header__top--logo']}>
          <p className="gradient__text">PITIAJTI</p>
        </div>
        <Search />
        <div className={styles['header__top--btn']}>
          <button type="button">Zaloguj się</button>
          <button type="button">Zarejestruj się</button>
          <div className={styles['header__top--btn-mode']}>
            <BsSun
              onClick={() => {
                dispatch(toggleMode());
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <nav>
          <DesktopMenu />
          <Link to="/">O nas</Link>
          <Link to="/">Kontakt</Link>
          <Link to="/">Nauczaj z nami</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
