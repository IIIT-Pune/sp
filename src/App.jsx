import "./firebase/firebase";
import "./styles/App.scss";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import Form from "./components/Form";
import Show from "./components/Show";
import Update from "./components/UpdateNew";
import  {ProtectedFormRoute}  from "./ProtectedRoute";
import { DataProvider } from "./context/FormContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
// import { currentUser } from "./components/Login";
// import { HomeIcon } from "@material-ui/icons";
// import {HomeIcon} from '@mui/icons-material';

function App() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return setIsUserSignedIn(true);
		}
		setIsUserSignedIn(false);
	});
	// const retUser = () => {
	// 	return firebase.auth().currentUser;
	// };
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<Homepg />
					</Route>
					<Route path='/login' exact component={Login} />
					<Route path='/about' exact component={About} />
					<DataProvider>
						<ProtectedFormRoute path='/form' exact component={Form} />
						<ProtectedFormRoute exact path="/show" component={Show}/>
						<ProtectedFormRoute path='/updateNew' exact component={Update} />
					</DataProvider>
					
				</Switch>
			</div>
		</Router>
	);
}

const greetUser = (userLogged) =>{
	if (userLogged){
		return <p>Hello, {userLogged.displayName}</p> ;
	}
}

const Homepg = (props) => (
	<div>
		<Typography variant='h3' align='center' style={{ marginTop: "1%" }}>
			Home Page
		</Typography>
		<Typography className='Body-text' align='center' style={{ marginTop: "1%" }}>
			{auth.currentUser ? null : `Login to see further details`}
		</Typography>
		<Typography variant='h6' className='Body-text' align='center' style={{ marginTop: "1%" }}>
			{/* "Logged in Username -" {auth.currentUser ? auth.currentUser.displayName : null} */}
			{greetUser(auth.currentUser)}
		</Typography>
		<Typography className='Body-text' align='center' style={{ marginTop: "1%" }}>
			Modify basic information using "Form" tab
		</Typography>
	</div>
);

export default App;
