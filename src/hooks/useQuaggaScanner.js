import Quagga from "quagga";
import { useEffect } from "react";

export const useQuaggaScanner = (deviceId, onSetBarcode) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.getElementById("scanner-container"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // вибір тилової камери
            deviceId,
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

    Quagga.onProcessed((res) => console.log("scanning: ", res));

    Quagga.onDetected((result) => {
      onSetBarcode(result.codeResult.code);
    });

    return () => {
      Quagga.stop();
    };
  }, [deviceId, onSetBarcode]);
};

export default useQuaggaScanner;
