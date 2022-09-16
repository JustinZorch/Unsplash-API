import { useState } from "react";
import styles from "./app.module.css";
import Grid from "./components/grid/Grid";
import SearchBar from "./components/searchBar/SearchBar";
import Fullscreen from "./components/fullScreen/Fullscreen";

function App() {
  const [fullscreen, setFullscreen] = useState(false);
  const images = [];
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Unsplash Search API</h1>
      <SearchBar />
      <Grid images={images} />
      {fullscreen && <Fullscreen title={1} alt={2} fullscreenUrl={3} />}
    </div>
  );
}

export default App;
