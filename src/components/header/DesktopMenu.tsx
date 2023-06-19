import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './DesktopMenu.module.scss';

const DesktopMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const currentRef = menuRef.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isVisible]);

  return (
    <div className={styles.desktopMenu} ref={menuRef}>
      <div className={styles.desktopMenu__open}>
        <p>Kursy</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      {isVisible && (
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
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Robotyka</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Sztuczna Inteligencja (AI)</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Uczenie Maszynowe (ML)</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Deep Learning (DL)</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Python (Programowanie)</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">C (Programowanie)</Link>
          </div>
          <div className={styles['desktopMenu__options--option']}>
            <Link to="/">Matematyka</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
