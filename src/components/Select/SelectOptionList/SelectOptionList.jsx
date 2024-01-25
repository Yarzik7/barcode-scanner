import { SelectOption } from "../SelectOption/SelectOption";
import scss from "./SelectOptionList.module.scss";

// const contentList = [1, 2, 3, 4];
// let devicesList;
// (async () => {
//   const res = await navigator.mediaDevices.enumerateDevices();
//   devicesList = res.filter(({ kind }) => kind === "videoinput");
// })();

// const getDevicesList = async () => {
//   const res = await navigator.mediaDevices.enumerateDevices();
//   devicesList = res.filter(({ kind }) => kind === "videoinput");
// };

const SelectOptionList = ({ setSelect, onClick, list = [] }) => {
  return (
    <div className={scss.selectOptionListContainer}>
      <ul className={scss.selectOptionList}>
        {list.map((content, idx) => (
          <SelectOption
            key={idx}
            content={content}
            setSelect={setSelect}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectOptionList;
