import scss from "./SelectOption.module.scss";

export const SelectOption = ({ setSelect, content }) => {
  const onSetSelectValue = () => setSelect(content);
  return (
    <li className={scss.selectOption} onClick={onSetSelectValue}>
      {content}
    </li>
  );
};
