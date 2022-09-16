import { sliderUnstyledClasses } from "@mui/base";
import styles from "./fullscreen.module.css";

export default function Fullscreen(props) {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>

      <button className={styles.button} onClick={props.onBack}>
        Back
      </button>
      <div className={styles.imageContainer}>
        <img
          className={styles.fullscreenImage}
          src={props.fullscreenUrl}
          alt={props.alt_description}
        ></img>
      </div>
    </div>
  );
}
