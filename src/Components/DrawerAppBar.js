import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import InfoIcon from "@mui/icons-material/Info";

const drawerWidth = 240;

const navItems = [
  { id: "1", btnName: "Scanner", url: "/", icon: <FilterCenterFocusIcon /> },
  {
    id: "2",
    btnName: "Generator",
    url: "/generator",
    icon: <QrCode2Icon />,
  },
  { id: "3", btnName: "About", url: "/about", icon: <InfoIcon /> },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        QRCodeX
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.url}>
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "left",
                  paddingLeft: "1rem",
                  paddingRight: "2rem",
                }}
              >
                {item.icon}
                <ListItemText
                  primary={item.btnName}
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="apptitle-mobile"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
            QRCodeX
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.url}>
                <Button
                  key={item.id}
                  sx={{ color: "#fff", marginLeft: "1rem" }}
                >
                  {item.btnName}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
