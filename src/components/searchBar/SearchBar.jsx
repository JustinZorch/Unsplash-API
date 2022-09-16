import { useRef, useState } from "react";
import styles from "./searchBar.module.css";
import { Tune } from "@mui/icons-material";
import Filters from "./Filters";

export default function SearchBar(props) {
  const searchRef = useRef();
  const [filters, setFilters] = useState(false);

  const filterHandler = () => {
    setFilters(!filters);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(searchRef.current.value);
  };
  return (
    <form className={styles.searchBar} onSubmit={formSubmitHandler}>
      <div className={styles.search}>
        <label className={styles.searchLabel}>Search</label>
        <input
          className={styles.searchInput}
          type="text"
          ref={searchRef}
          placeholder="Netherlands"
        ></input>
        <Tune className={styles.filters} onClick={filterHandler} />
      </div>
      {filters && <Filters />}
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
