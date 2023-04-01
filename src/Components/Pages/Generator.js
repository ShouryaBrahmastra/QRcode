import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { saveAs } from "file-saver";
import TextField from "@mui/material/TextField";
import QRCode from "qrcode";
import DrawerAppBar from "../DrawerAppBar";
import Footer from "../Footer";
import "../Pages/Generator.css";

const Generator = () => {
  const [dataText, setDataText] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.ibb.co/xHxJ0D8/qrcodex.jpg");

  const inputHandle = (e) => {
    setDataText(e.target.value);
    if (e.target.value === "") {
      setImgUrl("https://i.ibb.co/xHxJ0D8/qrcodex.jpg");
    }
  };

  const generateQR = async () => {
    await QRCode.toDataURL(dataText)
      .then((url) => {
        setImgUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downloadImage = () => {
    let date = Math.round(Date.now() / 1000);
    saveAs(imgUrl, `QRCode_${date}.jpg`);
  };

  return (
    <Container
      className="main-wrapper"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "100%",
      }}
    >
      <DrawerAppBar />
      <Container
        sx={{
          width: "100%",
          top: "2rem",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Card
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "1200px",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <Card
            className="qr-code-wrapper"
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 300,
              borderRadius: "0.5rem",
              marginBottom: "2rem",
              boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea
              sx={{
                flexWrap: "wrap",
              }}
            >
              <CardMedia
                component="img"
                image={imgUrl}
                onClick={downloadImage}
                sx={{
                  maxWidth: 300,
                  minHeight: 300,
                }}
              />
            </CardActionArea>
          </Card>
          <TextField
            className="data-text"
            id="outlined-multiline-flexible"
            label="Text"
            placeholder="Type anything that you want..."
            multiline
            onChange={(e) => {
              inputHandle(e);
            }}
            maxRows={4}
            fullWidth
            sx={{
              display: "auto",
              width: "300px",
              margin: "auto",
              boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.1)",
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ maxWidth: 300, marginTop: "2rem" }}
            onClick={generateQR}
          >
            Generate
          </Button>
        </Card>
      </Container>
      <Footer />
    </Container>
  );
};

export default Generator;
