// import logo from "./assets/logo.svg";
import "./styles/App.scss";
import React from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
// import { HomeIcon } from "@material-ui/icons";
// import {HomeIcon} from '@mui/icons-material';

function App() {
	return (
	  <Router>
		<div className="App">
		  <Navbar />
		  <Switch>
			<Route path="/" exact component={Homepg} />
			<Route path="/login" component={Login} />
			<Route path="/about" exact component={About} />
		  </Switch>
		</div>
	  </Router>
	);
  }

const Homepg = () => (
	<div>
	  <Typography variant="h3" align="center" style={{marginTop: "1%"}}>Home Page</Typography>
	  <Typography className="Body-text" align="center" style={{marginTop: "1%"}}>Login to see further details</Typography>
	  <Typography className="Body-text" align="center" style={{marginTop: "1%"}}>Once the user is logged-in a "FORM" tab will appear in Navbar where details can be modified</Typography>
	</div>
);

export default App;
