import React from "react";
import BackgroundImg from "../../img/BackgroundImg.png";
import './Jumbotron.css'

const JumbotronBackground = { 
    backgroundImage: `url(${BackgroundImg})`
};

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid" style = {JumbotronBackground}>
        <div className="container text-center">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead display-5">{props.subLine}</p>
        </div>
    </div>
)

export default Jumbotron;

