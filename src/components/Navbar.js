import React from "react";
import { AppBar, Toolbar, Button,Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <AppBar position="static" style={{borderRadius:"8px"}}>
        <Toolbar>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/IIITP_logo.jpg/245px-IIITP_logo.jpg"
            alt="IIITP"
            style={{ height: "45px" }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Button
              variant="contained"
              style={{ background: "white", marginLeft: "10px" }}
            >
            <Link to="/" style={{color: "black", textDecoration: "None"}}>TnP Portal Home</Link>
            </Button>
            <Button
              variant="contained"
              style={{ background: "white", marginLeft: "10px" }}
            >
            <Link to="/about" style={{color: "black", textDecoration: "None"}}>About</Link>
            </Button>
          </Box>
          <Button
            variant="contained"
            style={{ background: "white", marginLeft: "10px"}}
          >
            <Link to="/login" style={{color: "black", textDecoration: "None"}}>Login</Link>
          </Button>
          {/* <Button variant="contained" style={{background: "white", marginLeft: "10px"}}>DarkMode</Button> */}
        </Toolbar>
      </AppBar>
  );
}
