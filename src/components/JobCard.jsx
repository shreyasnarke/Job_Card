import React from "react";
import './JobCard.css';
 const JobCard = ({ name,address,email,phone }) => {
    return(
        <div className="card">
            <h2 className="card-title">Name : {name}</h2>
            <p className="card-text">Address: {address}</p>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Phone: {phone}</p>
        </div>
    );
 };
 export default JobCard;