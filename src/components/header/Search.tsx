import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Szukaj" />
      <button className={styles.search__btn} type="button">
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
