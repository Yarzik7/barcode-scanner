import Scanner from "../Scanner/Scanner";
import scss from "./MediaContainer.module.scss";

const MediaContainer = ({ onSetBarcode }) => {
  return (
    <div className={scss.mediaContainer}>
      <Scanner onSetBarcode={onSetBarcode} />
    </div>
  );
};

export default MediaContainer;
