import scss from "./Scanner.module.scss";

const Scanner = () => {
  return (
    <div id="scanner-container" className={scss.scanner}>
      <div className={scss.scanOverlay}>
        <div className={scss.scanField}></div>
      </div>
    </div>
  );
};

export default Scanner;
