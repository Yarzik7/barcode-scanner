"use client";
import Quagga from "quagga";
import { useEffect } from "react";

export const useQuaggaScanner = (onSetBarcode) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // вибір тилової камери
            deviceId:
              "e50a135e883ac85ff6307e1efa2c90a15d65f60f2b6ea1eb47dfcd5006f6dc14", // e8901f74866f821db235ea2907f2691e017fb990b324707b4f803bc3d545281d e50a135e883ac85ff6307e1efa2c90a15d65f60f2b6ea1eb47dfcd5006f6dc14
          },
          area: {
            top: "0%",
            right: "0%",
            left: "0%",
            bottom: "0%",
          },
        },
        decoder: {
          readers: ["ean_reader", "upc_reader"],
        },
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }

        Quagga.start();
      }
    );

    Quagga.onDetected((result) => {
      // Обробка знайденого штрихкоду
      // setBarcode(result.codeResult.code);
      onSetBarcode(result.codeResult.code);
      // Quagga.stop();
    });

    return () => {
      Quagga.stop();
    };
  }, [onSetBarcode]);
};

export default useQuaggaScanner;
