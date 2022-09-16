import styles from "./fullscreen.module.css";

export default function Fullscreen(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img
        className={styles.fullscreenImage}
        src={props.fullscreenUrl}
        alt={props.alt_description}
      ></img>
      {/* <button type="text" onClick={() => props.onDownload(props.download_Url)}>
        Download
      </button> */}
      <button onClick={props.onBack}>Back</button>
    </div>
  );
}
