import { SelectOption } from "../SelectOption/SelectOption";
import scss from "./SelectOptionList.module.scss";

const contentList = [1, 2, 3, 4];

const SelectOptionList = ({ setSelect }) => {
  return (
    <div className={scss.selectOptionListContainer}>
      <ul className={scss.selectOptionList}>
        {contentList.map((content, idx) => (
          <SelectOption key={idx} content={content} setSelect={setSelect} />
        ))}
      </ul>
    </div>
  );
};

export default SelectOptionList;