import { useState, Fragment } from "react";
import styles from "./app.module.css";
import Grid from "./components/grid/Grid";
import SearchBar from "./components/searchBar/SearchBar";
import Fullscreen from "./components/fullScreen/Fullscreen";

function App() {
  const [fullscreen, setFullscreen] = useState({
    show: false,
    title: "",
    fullscreen_Url: "",
  });
  const [images, setImages] = useState([]);

  const API_URL = "https://api.unsplash.com/search/photos?";
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const submitHandler = async (searchQuery, filterQuery) => {
    const { images, orderBy, color, orientation } = filterQuery;

    const searchUrl =
      API_URL +
      `query=${searchQuery}&` +
      `order_by=${orderBy}&` +
      (color !== "none" ? `color=${color}&` : "") +
      (orientation !== "all" ? `orientation=${orientation}&` : "") +
      `per_page=${images}&` +
      "client_id=" +
      CLIENT_ID;

    await fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  };

  const fullscreenHandler = (title, fullscreen_Url) => {
    console.log("FS HAndler");
    console.log(title, fullscreen);
    setFullscreen({
      show: true,
      title: title,
      fullscreen_Url: fullscreen_Url,
    });
    console.log("fullscreenhandler", fullscreen);
  };

  const backHandler = () => {
    setFullscreen({
      ...fullscreen,
      show: false,
    });
  };

  return (
    <div className={styles.app}>
      {!fullscreen.show && (
        <Fragment>
          <h1 className={styles.header}>Unsplash Search API</h1>
          <SearchBar onSubmitHandler={submitHandler} />
          <Grid images={images} onFullscreen={fullscreenHandler} />
        </Fragment>
      )}

      {fullscreen.show && (
        <Fullscreen
          title={fullscreen.title}
          alt={"???"}
          fullscreenUrl={fullscreen.fullscreen_Url}
          onBack={backHandler}
        />
      )}
    </div>
  );
}

export default App;
