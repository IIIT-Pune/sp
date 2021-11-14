import React, { useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Datacontext } from "../context/FormContext";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

export default function Show() {
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
		<div>
			<ul>
				<li>{formData.firstName}</li>
				<li>{formData.lastName}</li>
				<li>{formData.email}</li>
				<li>{formData.misNumber}</li>
				<li>{formData.gender}</li>
				<li>{formData.dob}</li>
				<li>{formData.branch}</li>
				<li>{formData.yos}</li>
				<li>{formData.phoneNumber}</li>
				<li>{formData.cgpa}</li>
				<li>{formData.address}</li>
			</ul>
			show here
			<Link to='/updateNew' style={{ color: "black", textDecoration: "None" }}>
				<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
					Update
				</Button>
			</Link>
		</div>
	);
}
