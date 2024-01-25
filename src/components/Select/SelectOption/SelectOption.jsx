import scss from "./SelectOption.module.scss";

export const SelectOption = ({ setSelect, onClick, content }) => {
  const onSetSelectValue = () => {
    setSelect(content);
    onClick();
  };
  return (
    <li className={scss.selectOption} onClick={onSetSelectValue}>
      {content}
    </li>
  );
};
