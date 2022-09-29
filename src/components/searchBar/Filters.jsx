import { useRef } from "react";
import styles from "./filters.module.css";

export default function Filters(props) {
  const numOfImagesRef = useRef();
  const orderByRef = useRef();
  const colorRef = useRef();
  const orientationRef = useRef();

  const filterHandler = () => {
    props.updateFilters({
      images: numOfImagesRef.current.value,
      orderBy: orderByRef.current.value,
      color: colorRef.current.value,
      orientation: orientationRef.current.value,
    });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.ipp}>
        <label>No of Images:</label>
        <input
          type="number"
          defaultValue="10"
          min="10"
          max="30"
          step="5"
          ref={numOfImagesRef}
          onChange={filterHandler}
        />
      </div>
      <div className="orderBy">
        <label>Order by:</label>
        <select
          className={styles.select}
          ref={orderByRef}
          onChange={filterHandler}
        >
          <option value="relevant" select="selected">
            Relevant
          </option>
          <option value="latest">Latest</option>
        </select>
      </div>

      <div className="color">
        <label>Filter by Color:</label>
        <select
          className={styles.select}
          ref={colorRef}
          onChange={filterHandler}
        >
          <option value="none" select="selected">
            None
          </option>

          <option value="black_and_white">Black and White</option>
          {[
            "black",
            "white",
            "yellow",
            "orange",
            "red",
            "purple",
            "magenta",
            "green",
            "teal",
            "blue",
          ].map((item) => (
            <option value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="orientation">
        <label>Orientation:</label>
        <select
          className={styles.select}
          ref={orientationRef}
          onChange={filterHandler}
        >
          <option value="all">All</option>
          <option value="landscape" select="selected">
            Landscape
          </option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </select>
      </div>
    </div>
  );
}
