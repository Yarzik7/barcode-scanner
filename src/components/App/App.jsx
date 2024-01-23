"use client";
import Section from "../Section/Section";
import MediaContainer from "../MediaContainer/MediaContainer";
import BarcodeContainer from "../BarcodeContainer/BarcodeContainer";
import { useState } from "react";
import scss from "./App.module.scss";

const App = () => {
  const [barcode, setBarcode] = useState("");
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      <MediaContainer onSetBarcode={setBarcode} />
      <BarcodeContainer />
    </Section>
  );
};

export default App;
