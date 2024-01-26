"use client";
import App from "@/components/App/App";
import Header from "@/components/Header/Header";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import { useState } from "react";
import AppTest from "@/components/AppTest/AppTest";
import styles from "./page.module.css";

export default function Home() {
  const [deviceId, setDeviceId] = useState("");
  const [deviceName, setDeviceName] = useState("");

  const onSetScannDevice = (deviceId, deviceName) => {
    setDeviceId(deviceId);
    setDeviceName(deviceName);
  };

  return (
    <>
      <Header onSetScannDevice={onSetScannDevice} deviceName={deviceName} />
      <main className={styles.main}>
        {/* <App /> */}
        {/* <AppTest
          deviceId={deviceId}
          deviceName={deviceName}
          onSetScannDevice={onSetScannDevice}
        /> */}
      </main>
      <ControlPanel />
    </>
  );
}
