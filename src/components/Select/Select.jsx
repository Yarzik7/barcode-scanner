"use client";
import SelectOptionList from "./SelectOptionList/SelectOptionList";
import { useState } from "react";
import scss from "./Select.module.scss";

const Select = () => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [select, setSelect] = useState("");
  const onToggleShowOptionList = () => setShowOptionList(!showOptionList);
  return (
    <div className={scss.selectContainer}>
      <input
        name="select"
        value={select}
        className={scss.select}
        placeholder="Select"
        readOnly
        onClick={onToggleShowOptionList}
      />
      <span className={scss.chevron} onClick={onToggleShowOptionList}>
        ^
      </span>
      {showOptionList && <SelectOptionList setSelect={setSelect} />}
    </div>
  );
};

export default Select;
