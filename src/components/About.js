import React from 'react'
import { Typography } from "@material-ui/core";

export default function About() {
    return (
        <div>
            <Typography variant="h3" align="center" style={{marginTop: "1%"}}>About</Typography>
            <Typography align="center" style={{marginTop: "1%"}}>Training and Placement Portal</Typography>
            <Typography align="center">The goal is to make it easier to manage your data and save time by preventing the filling of redundant information.</Typography>
            <Typography align="center" style={{marginTop: "1%"}}>Made as a colaborative project by Prakhar Bhatnagar, Saksham Kathuria, Bhuvan Bokka and Jayant Kumar</Typography>
        </div>
    )
}