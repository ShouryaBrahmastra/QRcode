import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import "./CodeScanner.css";

const CodeScanner = (props) => {
  const [data, setData] = useState("QR Code Not Detected!");

  return (
    <>
      <QrReader
        constraints={{
          facingMode: "environment",
        }}
        className="scanner-window"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          // if (!!error) {
          //   console.info(error);
          // }
        }}
      />
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography className="results">
          <a href={data}>{data}</a>
        </Typography>
      </Card>
    </>
  );
};

export default CodeScanner;
