import { Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const google_provider = new GoogleAuthProvider();
const auth = getAuth();

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
			.then(() => {
				history.push("./Form");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
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
