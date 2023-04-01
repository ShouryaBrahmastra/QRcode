import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './Button.css';

export default function BasicButtons() {
  return (
    <Stack className="btn-container" spacing={2} direction="row">
      <Button className="btn" variant="contained">
        Scan Code
      </Button>
    </Stack>
  );
}
