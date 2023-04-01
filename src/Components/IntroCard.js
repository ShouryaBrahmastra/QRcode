import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function IntroCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",

        mb: 5,
        mt: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          padding: 2,
          maxWidth: "500px",
          textAlign: "center",
        }}
        color="text.secondary"
      >
        The ideal tool to scan your QR codes anytime, anyplace is the QR &
        Barcode Scanner. You can now quickly scan all of your QR codes from one
        place.
      </Typography>
    </Card>
  );
}
