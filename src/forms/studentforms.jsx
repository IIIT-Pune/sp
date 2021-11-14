import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Datacontext } from "../context/FormContext";
import { getAuth } from "@firebase/auth";
import {
	Grid,
	Typography,
	TextField,
	Container,
	FormLabel,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

const Studentforms = () => {
	const { dataValues } = useContext(Datacontext);
	const [formData, setformData] = dataValues;
	const history = useHistory();

	const createNew = async () => {
		await setDoc(doc(db, "studentsDetails", auth.currentUser.email), {
			firstName: formData.firstName,
			lastName: formData.lastName,
			misNumber: formData.misNumber,
			email: formData.email,
			gender: formData.gender,
			dob: formData.dob,
			yos: formData.yos,
			branch: formData.branch,
			phoneNumber: formData.phoneNumber,
			cgpa: formData.cgpa,
			address: formData.address,
			filled: formData.filled,
		});
	};

	// const onReset = (e) => {
	// 	setformData(defaultData);
	// };
	const submitForm = async (e) => {
		// e.preventDefault();
		setformData(e);

		if (await window.confirm("Are you sure you want to Submit provided details?")) {
			createNew()
				.then(() => {
					alert("Data stored Successfully!");
					history.push("./Show");
				})
				.catch(() => {
					alert("Error occured");
				});
		}
	};

	const { control, handleSubmit, reset } = useForm({
		defaultValues: formData,
	});

	return (
		<React.Fragment>
			<Container maxWidth='sm'>
				<Typography align='center' variant='h5' sx={{ m: 4 }}>
					Student Details
				</Typography>

				<form onSubmit={handleSubmit(submitForm)}>
					<Grid container spacing={2} alignItems='center' justifyContent='center'>
						{(formData.filled = true)}

						<Grid item xs={12} sm={6}>
							<Controller
								name='firstName'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='First Name'
										name='firstName'
										required
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='lastName'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='Last Name'
										name='lastName'
										required
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='misNumber'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='MIS Number'
										required
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='email'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='Email Id'
										required
										fullWidth
										name='email'
									/>
								)}
							/>
						</Grid>

						<Grid item>
							<FormControl required component='fieldset'>
								<FormLabel component='legend'>Gender</FormLabel>

								<Controller
									name='gender'
									control={control}
									render={({ field: { value, onChange } }) => (
										<RadioGroup
											row
											aria-label='gender'
											name='gender'
											value={value}
											onChange={onChange}>
											<FormControlLabel value='Male' control={<Radio />} label='Male' />
											<FormControlLabel value='Female' control={<Radio />} label='Female' />
											<FormControlLabel value='Other' control={<Radio />} label='Other' />
										</RadioGroup>
									)}
								/>
							</FormControl>
						</Grid>
						<Grid item>
							<Controller
								name='dob'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='DOB'
										required
										fullWidth
										name='dob'
										type='date'
										sx={{ width: 260 }}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								)}
							/>
						</Grid>
						<Grid item>
							<FormControl variant='standard' required sx={{ minWidth: 268 }}>
								<InputLabel id='year-of-study'>Year Of Study</InputLabel>
								<Controller
									name='yos'
									control={control}
									render={({ field: { value, onChange } }) => (
										<Select
											labelId='year-of-study'
											id='year-of-study'
											value={value}
											label='Year of Study'
											onChange={onChange}>
											<MenuItem value={"First"}>1st</MenuItem>
											<MenuItem value={"Second"}>2nd</MenuItem>
											<MenuItem value={"Third"}>3rd</MenuItem>
											<MenuItem value={"Fourth"}>4th</MenuItem>
										</Select>
									)}
								/>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl variant='standard' required sx={{ minWidth: 268 }}>
								<InputLabel id='branch'>Branch</InputLabel>
								<Controller
									name='branch'
									control={control}
									render={({ field: { value, onChange } }) => (
										<Select
											labelId='branch'
											id='branch'
											label='Branch'
											name='branch'
											value={value}
											onChange={onChange}>
											<MenuItem value={"CSE"}>CSE</MenuItem>
											<MenuItem value={"ECE"}>ECE</MenuItem>
										</Select>
									)}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='phoneNumber'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='Phone Number'
										required
										fullWidth
										name='phoneNumber'
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='cgpa'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='CGPA'
										required
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name='address'
								control={control}
								render={({ field: { value, onChange } }) => (
									<TextField
										onChange={onChange}
										value={value}
										variant='standard'
										label='Address'
										name='address'
										required
										fullWidth
									/>
								)}
							/>
						</Grid>
						{/* <Button sx={{ m: 2 }} variant='outlined' onClick={onReset}>
							Reset
						</Button> */}
						<Button type='submit' sx={{ m: 2 }} variant='contained'>
							Submit
						</Button>
					</Grid>
				</form>
			</Container>
		</React.Fragment>
	);
};
export default Studentforms;
