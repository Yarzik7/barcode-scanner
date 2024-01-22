import Scanner from "../Scanner/Scanner";
import scss from "./MediaContainer.module.scss";

const MediaContainer = () => {
  return (
    <div className={scss.mediaContainer}>
      <Scanner />
    </div>
  );
};

export default MediaContainer;
