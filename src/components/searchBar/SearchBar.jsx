import { useRef, useState } from "react";
import styles from "./searchBar.module.css";
import { Tune } from "@mui/icons-material";
import Filters from "./Filters";

export default function SearchBar(props) {
  const searchRef = useRef();
  const [filters, setFilters] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    images: "10",
    orderBy: "relevant",
    color: "none",
    orientation: "all",
  });

  const filterHandler = () => {
    setFilters(!filters);
  };

  const updateFilters = (newFilters) => {
    setFilterOptions(newFilters);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    props.onSubmitHandler(searchRef.current.value, filterOptions);
  };

  return (
    <form className={styles.searchBar} onSubmit={searchHandler}>
      <div className={styles.search}>
        <label className={styles.searchLabel}>Search</label>
        <input
          className={styles.searchInput}
          type="text"
          ref={searchRef}
          placeholder="Netherlands"
          defaultValue=""
        ></input>
        <Tune className={styles.filters} onClick={filterHandler} />
      </div>
      {filters && <Filters updateFilters={updateFilters} />}
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
