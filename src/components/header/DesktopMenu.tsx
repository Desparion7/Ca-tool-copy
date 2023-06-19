import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './DesktopMenu.module.scss';

const DesktopMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.desktopMenu}>
      <div className={styles.desktopMenu__open}>
        <p>Kursy</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <div
        className={`${styles.desktopMenu__options}`}
        onClick={() => {
          setIsVisible(false);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setIsVisible(false);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div>
          <Link to="/">Robotyka</Link>
        </div>
        <div>
          <Link to="/">AI</Link>
        </div>
        <div>
          <Link to="/">ML</Link>
        </div>
        <div>
          <Link to="/">Deep Learning(DL)</Link>
        </div>
        <div>
          <Link to="/">Matematyka</Link>
        </div>
        <div>
          <Link to="/">Python</Link>
        </div>
        <div>
          <Link to="/">C</Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
