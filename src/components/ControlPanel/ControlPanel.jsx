import Button from "../Button/Button";
import { classNameJoin } from "@/utils";
import scss from "./ControlPanel.module.scss";

const ControlPanel = ({ className }) => {
  return (
    <div className={classNameJoin(scss.controlPanel, className)}>
      <Button>S</Button>
    </div>
  );
};

export default ControlPanel;
