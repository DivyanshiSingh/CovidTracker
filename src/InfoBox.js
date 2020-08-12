import React from 'react'; 
import './InfoBox.css';
import {Card,CardContent,Typography} from "@material-ui/core";

function InfoBox({title,cases,active,isRed, total, ...props}) {
    return (
        <Card onClick={props.onClick} 
        className={`infoBox ${active && "infoBox--selected"} ${
            isRed && "infoBox--red"
          }`}>
            <CardContent>
                <Typography color="textSecondary" className="infoBox_title">
                    {title}

                </Typography>
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}</h2>
                <Typography color="textSecondary" className="infoBox_total">
                    {total} Total
                </Typography >
            </CardContent>
        </Card>
    )
}

export default InfoBox
