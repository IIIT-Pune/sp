import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Datacontext } from "../context/FormContext";
import { getAuth } from "firebase/auth";

import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Avatar,
	Grid,
	Typography,
	TablePagination,
	TableFooter,
} from "@material-ui/core";
import { tableCellClasses } from "@mui/material";

const db = getFirestore();
const auth = getAuth();

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
	},
	tableContainer: {
		borderRadius: 15,
		margin: "10px 10px",
		maxWidth: 950,
	},
	tableHeaderCell: {
		fontWeight: "bold",
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark),
	},
	name: {
		fontWeight: "bold",
		color: theme.palette.secondary.dark,
	},
}));

export default function Show() {
	const classes = useStyles();
	const { dataValues } = useContext(Datacontext);
	const [formData, setFormData] = dataValues;

	const userDocRef = doc(db, "studentsDetails", auth?.currentUser?.email);
	const getDocument = () => {
		if (userDocRef && auth)
			(async () => {
				const docSnap = await getDoc(userDocRef);
				if (docSnap.exists()) {
					console.log(docSnap.data());
					setFormData({
						firstName: docSnap.data().firstName,
						lastName: docSnap.data().lastName,
						misNumber: docSnap.data().misNumber,
						email: docSnap.data().email,
						gender: docSnap.data().gender,
						dob: docSnap.data().dob,
						yos: docSnap.data().yos,
						branch: docSnap.data().branch,
						phoneNumber: docSnap.data().phoneNumber,
						cgpa: docSnap.data().cgpa,
						address: docSnap.data().address,
					});
				} else {
					console.log("No such document!");
				}
			})();
	};
	useEffect(() => {
		getDocument();
	}, []);

	return (
		<div style={{ display: "grid", placeItems: "center" }}>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell className={classes.tableHeaderCell}>Fields</TableCell>
							<TableCell className={classes.tableHeaderCell}>Info</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>
								{formData.firstName} {formData.lastName}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Email</TableCell>
							<TableCell>{formData.email}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>MIS No</TableCell>
							<TableCell>{formData.misNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gender</TableCell>
							<TableCell>{formData.gender}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>DOB</TableCell>
							<TableCell>{formData.dob}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Branch</TableCell>
							<TableCell>{formData.branch}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Year of Study</TableCell>
							<TableCell>{formData.yos}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Phone</TableCell>
							<TableCell>{formData.phoneNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>CGPA</TableCell>
							<TableCell>{formData.cgpa}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Address</TableCell>
							<TableCell>{formData.address}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<Link to='/form' style={{ color: "white", textDecoration: "None" }}>
				<Button
					variant='contained'
					style={{ color: "white", background: "#3f51b5", marginLeft: "10px" }}>
					Update
				</Button>
			</Link>
		</div>
	);
}
