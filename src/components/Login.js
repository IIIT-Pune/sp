import { Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const google_provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

const useStyles = makeStyles({
	loginHeading: {
		margin: "1%",
	},
	btnStyling: {
		marginTop: "1%",
		textAlign: "left",
		background: "#3e57ab",
		color: "white",
	},
});

export default function Login() {
	const classes = useStyles();
	const history = useHistory();

	const SignInwithFirebase = () => {
		signInWithPopup(auth, google_provider)
			.then(async() => {
				const docSnap = await getDoc(doc(db, "studentsDetails", auth?.currentUser?.email));
				if(docSnap.exists())
					history.push("/Show");
				else history.push("/Form")
			})
			.catch((err) => {
				console.log(err);
			});
	};
	function IfSignedIn(){
		return(
			<div>
			<Typography className={classes.loginHeading} variant='h3' align='center'>
				Login
			</Typography>
			<Typography align='center'>Login using institute email id only.</Typography>
			<Box textAlign='center'>
				<Button className={classes.btnStyling} variant='contained' onClick={SignInwithFirebase}>
					SIGN IN WITH GOOGLE
				</Button>
			</Box>
		</div>
		);
	}
	return(
		auth.currentUser? <Redirect to="/"/>: <IfSignedIn/>
	);
}
