import React from "react";
import { TextField } from "@mui/material";
import QRCode from "qrcode";

const Generator = () => {
  const GenerateQRCode = () => {
    QRCode.toDataURL("")
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  );
};

export default Generator;
