import React from 'react';
import CardU from "./components/CardU.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={lenguajes: []};
  }

  componentDidMount(){
    fetch('data/lenguajes.json').then(response=>{
      return response.json()
    }).then( (tech) => {
      console.log( tech )
      this.setState({
        lenguajes: tech
      })
    } )
  }

  render(){
    const {lenguajes}= this.state;
    return (
            <>
            {lenguajes && lenguajes.map((lenguaje, key)=>(
              <CardU lenguaje={ lenguaje } key={key} />
            ))}
            </>
          );
        }
}