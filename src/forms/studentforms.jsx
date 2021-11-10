import React from "react";
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
import { useState } from "react";

const defaultData = {
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
};

const Studentforms = () => {
	const [formData, setformData] = useState(defaultData);

	const onChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// setformData(defaultData);
	};

	const onReset = (e) => {
		setformData(defaultData);
	};

	return (
		<React.Fragment>
			<Container maxWidth='sm'>
				<Typography align='center' variant='h5' sx={{ m: 4 }}>
					Student Form
				</Typography>

				<form onSubmit={onSubmit}>
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
						<Button sx={{ m: 2 }} variant='outlined' onClick={onReset}>
							Reset
						</Button>
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
