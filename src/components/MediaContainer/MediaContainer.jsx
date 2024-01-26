// import Scanner from "../Scanner/Scanner";
import dynamic from "next/dynamic";
const Scanner = dynamic(
  () => {
    return import("../Scanner/Scanner");
  },
  { ssr: false }
);
import scss from "./MediaContainer.module.scss";

const MediaContainer = ({ isStartScann, deviceId, onSetBarcode }) => {
  return (
    <div className={scss.mediaContainer}>
      {isStartScann && (
        <Scanner onSetBarcode={onSetBarcode} deviceId={deviceId} />
      )}
    </div>
  );
};

export default MediaContainer;
