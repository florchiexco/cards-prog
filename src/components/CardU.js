import React from "react";
import Card from 'react-bootstrap/Card';

export default class CardU extends React.Component{
    constructor(props){
        super(props);
    }

//la idea es que reciba 

    render(){
        const {cardIMG, cardTitle, cardDescription}= this.props.lenguaje;
        return (
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardIMG} />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>{cardDescription}</Card.Text>
                </Card.Body>
                </Card>
            </>
        );
    }
} 