import BarcodeCard from "../BarcodeCard/BarcodeCard";
import scss from "./BarcodeContainer.module.scss";

const BarcodeContainer = () => {
  return (
    <div className={scss.barcodeContainer}>
      <BarcodeCard />
    </div>
  );
};

export default BarcodeContainer;
