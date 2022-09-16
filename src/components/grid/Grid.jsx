import React from "react";
import Masonry from "@mui/lab/Masonry";
import Image from "./Image";
import styles from "./grid.module.css";

export default function Grid(props) {
  const fullscreenHandler = (description, fullsScreenUrl) => {};

  return (
    <div className={styles.grid}>
      <Masonry columns={5} spacing={1}>
        {props.images.map((image, index) => (
          <Image
            src={image.urls["thumb"]}
            alt={image["alt_description"]}
            key={index}
            userName={image.user.name}
            onFullScreen={() =>
              props.onFullscreen(image["description"], image.urls["full"])
            }
          />
        ))}
      </Masonry>
    </div>
  );
}
