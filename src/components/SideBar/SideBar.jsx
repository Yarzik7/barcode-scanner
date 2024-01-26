import Select from "../Select/Select";
import scss from "./SideBar.module.scss";

const SideBar = ({ deviceName, onSetScannDevice }) => {
  return (
    <aside className={scss.sidebar}>
      <div className={scss.sidebarContentBox}>
        <Select onSetScannDevice={onSetScannDevice} deviceName={deviceName} />
      </div>
    </aside>
  );
};

export default SideBar;
