import React from "react";
import { CameraAlt } from "@mui/icons-material";
import styles from "./image.module.css";

export default function Image(props) {
  return (
    <div className={styles.imageContainer} onClick={props.onFullScreen}>
      <img src={props.src} alt={props.alt}></img>
      <div>
        <span className={styles.userName}>
          <CameraAlt /> {props.userName}
        </span>
      </div>
    </div>
  );
}
