import Section from "../Section/Section";
import MediaContainer from "../MediaContainer/MediaContainer";
import BarcodeContainer from "../BarcodeContainer/BarcodeContainer";
import scss from "./App.module.scss";

const App = () => {
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      <MediaContainer />
      <BarcodeContainer />
    </Section>
  );
};

export default App;
