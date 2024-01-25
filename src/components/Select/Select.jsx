"use client";
import SelectOptionList from "./SelectOptionList/SelectOptionList";
import { useState } from "react";
import scss from "./Select.module.scss";

let devicesList;
(async () => {
  const res = await navigator.mediaDevices.enumerateDevices();
  devicesList = res.filter(({ kind }) => kind === "videoinput");
})();

const Select = ({ deviceName, deviceId, onSetScannDevice }) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const onToggleShowOptionList = () => setShowOptionList(!showOptionList);
  return (
    <div className={scss.selectContainer}>
      <input
        name="select"
        value={deviceName}
        className={scss.select}
        placeholder="Select"
        readOnly
        onClick={onToggleShowOptionList}
      />
      <span className={scss.chevron} onClick={onToggleShowOptionList}>
        ^
      </span>
      {showOptionList && (
        <SelectOptionList
          setSelect={onSetScannDevice}
          onClick={onToggleShowOptionList}
          list={devicesList}
        />
      )}
    </div>
  );
};

export default Select;
