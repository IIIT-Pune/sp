import React from "react";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase";

function IfSignedIn() {
  const logOut = () => {
    firebase.auth().signOut()
      .then(() => console.log('signed out'));
  }
  return (
    <Toolbar>
      <Button
        onClick={logOut}
        variant="contained"
        style={{ background: "white", marginLeft: "10px" }}
      >
        <Link to="/login" style={{ color: "black", textDecoration: "None" }}>Logout</Link>
      </Button>
      <Button
        variant="contained"
        style={{ background: "white", marginLeft: "10px" }}
      >
        <Link to="/form" style={{ color: "black", textDecoration: "None" }}>Form</Link>
      </Button>
    </Toolbar>
  );
}

function NotSignedIn() {
  return (
    <Button
      variant="contained"
      style={{ background: "white", marginLeft: "10px" }}
    >
      <Link to="/login" style={{ color: "black", textDecoration: "None" }}>Login</Link>
    </Button>
  );
}

export default function Navbar() {

  return (
    <AppBar position="static" style={{ borderRadius: "8px" }}>
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
            <Link to="/" style={{ color: "black", textDecoration: "None" }}>TnP Portal Home</Link>
          </Button>
          <Button
            variant="contained"
            style={{ background: "white", marginLeft: "10px" }}
          >
            <Link to="/about" style={{ color: "black", textDecoration: "None" }}>About</Link>
          </Button>
        </Box>
        {firebase.auth().currentUser ? <IfSignedIn /> : <NotSignedIn />}
      </Toolbar>
    </AppBar>
  );
}

