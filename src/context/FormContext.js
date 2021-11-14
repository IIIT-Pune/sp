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
};
export const Datacontext= createContext();
export const DataProvider= (props)=>{
    const [formData, setformData] = useState(defaultData);
    const [flag, setFlag] = useState(false);
    return (
        <Datacontext.Provider value={{
            dataValues: [formData, setformData], 
            dataFlag: [flag, setFlag]}}>
            {props.children}
        </Datacontext.Provider>
    )
}
