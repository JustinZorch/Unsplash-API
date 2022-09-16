import React from "react";
import { CameraAlt } from "@mui/icons-material";
import styles from "./image.module.css";

export default function Image(props) {
  return (
    <div className={styles.imageContainer} onClick={props.onFullScreen}>
      <img src={props.src} alt={props.alt}></img>
      <div className={styles.tag}>
        <CameraAlt />
        <span className={styles.userName}>{props.userName}</span>
      </div>
    </div>
  );
}
