import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";

const auth = getAuth();
export const ProtectedFormRoute =  ({ component: Component, usedComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (auth.currentUser ? <Component {...props} /> : <Redirect to='./Login' />)}
		/>
	);
};
