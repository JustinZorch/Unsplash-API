import { useRef } from "react";
import styles from "./filters.module.css";

export default function Filters() {
  const orderByRef = useRef();
  const colorRef = useRef();
  const orientationRef = useRef();
  const numOfImagesRef = useRef();

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
        />
      </div>
      <div className="orderBy">
        <label>Order by:</label>
        <select className={styles.select} ref={orderByRef}>
          <option value="relevant" select="selected">
            Relevant
          </option>
          <option value="latest">Latest</option>
        </select>
      </div>

      <div className="color">
        <label>Filter by Color:</label>
        <select className={styles.select} ref={colorRef}>
          <option value="none" select="selected">
            None
          </option>
          <option value="black_and_white">Black and White</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
          <option value="magenta">Magenta</option>
          <option value="green">Green</option>
          <option value="teal">Teal</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="orientation">
        <label>Orientation:</label>
        <select className={styles.select} ref={orientationRef}>
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
