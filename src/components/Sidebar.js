import React from "react";

export default class Sidebar extends React.Component{
    constructor(){
        super();
        this.state={
            info: {nombre: "Florencia Excoffon", descripcion:"Tengo 20 años, soy estudiante de Programación en la UTN y me gusta desarrollar en javascript. Actualmente estoy haciendo un skill-factory en Avalith."}
        }
    }
}
