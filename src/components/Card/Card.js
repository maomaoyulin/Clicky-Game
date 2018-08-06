import React from 'react';
import { Col } from "../../components/Grid";

import './Card.css'

const Card = props => (
        <Col size="md-3">
            <img className = 'cardImg rounded shadow-lg' src={props.url} 
            alt={props.id} key={props.id} name={props.name} onClick = {() => {props.imgClickFunc(props.id)}}/>
        </Col>
);

export default Card;
