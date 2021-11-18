import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Datacontext } from "../context/FormContext";
const auth = getAuth();

const IsSubmited = () => {
	const { dataFlag } = useContext(Datacontext);
	const [flag, setFlag] = dataFlag;

	return !flag ? (
		<Link to='/Form' style={{ color: "black", textDecoration: "None" }}>
			<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
				Form
			</Button>
		</Link>
	) : (
		<Link to='/Show' style={{ color: "black", textDecoration: "None" }}>
			<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
				Show
			</Button>
		</Link>
	);
};
function IfSignedIn() {
	const { dataValues, dataFlag } = useContext(Datacontext);
	const [formData, setformData] = dataValues;
	const [flag, setFlag] = dataFlag;

	const logOut = () => {
		signOut(auth).then(() => console.log("signed out"));
		setformData({
			firstName: "",
			lastName: "",
			misNumber: "",
			email: "",
			gender: "",
			dob: "",
			yos: "",
			branch: "",
			phoneNumber: "",
			cgpa: "",
			address: "",
		});
		setFlag(false);
	};
	return (
		<Toolbar>
			<IsSubmited />

			<Link to='/login' style={{ color: "black", textDecoration: "None" }}>
				<Button
					onClick={logOut}
					variant='contained'
					style={{ background: "white", marginLeft: "10px" }}>
					Logout
				</Button>
			</Link>
		</Toolbar>
	);
}

function NotSignedIn() {
	return (
		<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
			<Link to='/login' style={{ color: "black", textDecoration: "None" }}>
				Login
			</Link>
		</Button>
	);
}

export default function Navbar() {
	return (
		<AppBar position='static' style={{ borderRadius: "8px" }}>
			<Toolbar>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/IIITP_logo.jpg/245px-IIITP_logo.jpg'
					alt='IIITP'
					style={{ height: "45px" }}
				/>
				<Box sx={{ flexGrow: 1 }}>
					<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
						<Link to='/' style={{ color: "black", textDecoration: "None" }}>
							TnP Portal Home
						</Link>
					</Button>
					<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
						<Link to='/about' style={{ color: "black", textDecoration: "None" }}>
							About
						</Link>
					</Button>
				</Box>
				{auth.currentUser ? <IfSignedIn /> : <NotSignedIn />}
			</Toolbar>
		</AppBar>
	);
}
