import scss from "./Button.module.scss";

const Button = ({ children }) => {
  return <button className={scss.button}>{children}</button>;
};

export default Button;
