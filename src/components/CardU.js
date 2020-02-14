import React from "react";

export default class CardU extends React.Component{
    constructor(props){
        super(props);
    }

//la idea es que reciba 

    render(){
        const {cardIMG, cardTitle, cardDescription}= this.props.lenguaje;
        return (
            <>
                <div className="card">
                    <img src={cardIMG} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">{cardDescription}</p>
                        <a href="#" className="btn btn-dark">Ver más</a>
                    </div>
                </div>
            </>
        );
    }
} 