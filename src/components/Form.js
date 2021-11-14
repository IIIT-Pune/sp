import React, { useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import {Datacontext} from "../context/FormContext"
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
import {
	getFirestore,
	doc,
	setDoc
} from "firebase/firestore";

const db = getFirestore();
const auth= getAuth();

const Form = () => {

	const {dataValues, dataFlag}=useContext(Datacontext);
	const [formData, setformData] = dataValues;
    const history = useHistory();

    const createNew= async ()=>{
        await setDoc(doc(db,"studentsDetails", auth.currentUser.email), {
            firstName:formData.firstName,
            lastName:formData.lastName,
            misNumber: formData.misNumber,
            email: formData.email,
            gender: formData.gender,
            dob: formData.dob,
            yos: formData.yos,
			branch:formData.branch,
            phoneNumber: formData.phoneNumber,
            cgpa: formData.cgpa,
            address: formData.address,
        })
    }

	const onChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	// const onReset = (e) => {
	// 	setformData(dataValues);
	// };
	const submitForm= async (e)=>{
        e.preventDefault();

            if(await window.confirm("Are you sure you want to Submit provided details?")){
				createNew()
				.then(()=>{
					alert("Data stored Successfully!")
					history.push("./Show");
				})
				.catch(()=>{
					alert("Error occured")
				})
			}
    }
    
	return (
		<React.Fragment>
			<Container maxWidth='sm'>
				<Typography align='center' variant='h5' sx={{ m: 4 }}>
					Student Form
				</Typography>

				<form onSubmit={submitForm}>
					<Grid container spacing={2} alignItems='center' justifyContent='center'>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='firstName'
								label='First Name'
								variant='standard'
								name='firstName'
								value={formData.firstName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='lastName'
								label='Last Name'
								variant='standard'
								name='lastName'
								value={formData.lastName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='misNumber'
								label='MIS Number'
								variant='standard'
								name='misNumber'
								value={formData.misNumber}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Id'
								variant='standard'
								name='email'
								value={formData.email}
								onChange={onChange}
							/>
						</Grid>
						<Grid item>
							<FormControl required component='fieldset'>
								<FormLabel component='legend'>Gender</FormLabel>
								<RadioGroup
									row
									aria-label='gender'
									name='gender'
									value={formData.gender}
									onChange={onChange}>
									<FormControlLabel value='male' control={<Radio />} label='Male' />
									<FormControlLabel value='female' control={<Radio />} label='Female' />
									<FormControlLabel value='other' control={<Radio />} label='Other' />
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item>
							<TextField
								variant='standard'
								required
								id='date'
								label='DOB'
								type='date'
								name='dob'
								value={formData.dob}
								onChange={onChange}
								sx={{ width: 260 }}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item>
							<FormControl variant='standard' required sx={{ minWidth: 268 }}>
								<InputLabel id='year-of-study'>Year Of Study</InputLabel>
								<Select
									labelId='year-of-study'
									name='yos'
									id='year-of-study'
									value={formData.yos}
									label='Year of Study'
									onChange={onChange}>
									<MenuItem value={"First"}>1st</MenuItem>
									<MenuItem value={"Second"}>2nd</MenuItem>
									<MenuItem value={"Third"}>3rd</MenuItem>
									<MenuItem value={"Fourth"}>4th</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl variant='standard' required sx={{ minWidth: 268 }}>
								<InputLabel id='branch'>Branch</InputLabel>
								<Select
									labelId='branch'
									id='branch'
									label='Branch'
									name='branch'
									value={formData.branch}
									onChange={onChange}>
									<MenuItem value={"CSE"}>CSE</MenuItem>
									<MenuItem value={"ECE"}>ECE</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='phoneNumber'
								label='Phone Number'
								variant='standard'
								name='phoneNumber'
								value={formData.phoneNumber}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='cgpa'
								label='CGPA'
								variant='standard'
								name='cgpa'
								value={formData.cgpa}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='address'
								label='Address'
								variant='standard'
								name='address'
								value={formData.address}
								onChange={onChange}
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
	)
}
export default Form
