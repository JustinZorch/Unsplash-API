import React from "react";
import Masonry from "@mui/lab/Masonry";
import Image from "./Image";

export default function Grid(props) {
  const images = [];
  const fullscreenHandler = (description, fullsScreenUrl) => {};

  return (
    <Masonry columns={4} spacing={1}>
      {props.images.map((image, index) => (
        <Image
          src={image.urls["thumb"]}
          alt={image["alt_description"]}
          key={index}
          userName={image.user.name}
          onFullScreen={() =>
            fullscreenHandler(image["description"], image.urls["full"])
          }
        />
      ))}
    </Masonry>
  );
}
