import Scanner from "../Scanner/Scanner";
import scss from "./MediaContainer.module.scss";

const MediaContainer = ({ deviceId, onSetBarcode }) => {
  return (
    <div className={scss.mediaContainer}>
      <Scanner onSetBarcode={onSetBarcode} deviceId={deviceId} />
    </div>
  );
};

export default MediaContainer;
