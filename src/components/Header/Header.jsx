import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <Container className={scss.headerContainer}>
        <Button>
          <Icon iconName="menu" />
        </Button>
        <Heading
          type="h1"
          content="Barcode scanner"
          props={{ className: scss.heading }}
        />
      </Container>
    </header>
  );
};

export default Header;
