import React, { useState, createContext } from 'react'

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
    filled: null,
};
export const Datacontext= createContext();
export const DataProvider= (props)=>{
    const [formData, setformData] = useState(defaultData);
    const [submit,setSubmit] = useState("Submit");
    const [flag, setFlag] = useState(false);
    return (
        <Datacontext.Provider value={{
            dataValues: [formData, setformData], 
            dataSubmit: [submit, setSubmit],
            dataFlag: [flag, setFlag]}}>
            {props.children}
        </Datacontext.Provider>
    )
}
