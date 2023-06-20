import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { TbMoon } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode, colorMode } from '../../app/slice/colorModeSlice';
import styles from './Header.module.scss';
import Search from './Search';
import DesktopMenu from './DesktopMenu';

const Header = () => {
  const dispatch = useDispatch();

  const mode = useSelector(colorMode);

  return (
    <header className={`${styles.header} containter`}>
      <div className={styles.header__top}>
        <div className={styles['header__top--logo']}>
          <img src="./logo.png" alt="logo" />
        </div>
        <Search />
        <div className={styles['header__top--btn']}>
          <button type="button">Zaloguj się</button>
          <button type="button">Zarejestruj się</button>
          <div className={styles['header__top--btn-mode']}>
            {mode === 'light' ? (
              <TbMoon
                onClick={() => {
                  dispatch(toggleMode());
                }}
              />
            ) : (
              <BsSun
                onClick={() => {
                  dispatch(toggleMode());
                }}
              />
            )}
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
