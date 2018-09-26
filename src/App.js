import React from 'react';
import Pages from './components/PageRoutes';
import {Link} from "react-router-dom";
import {Button} from "react-materialize";


export default function App() {
    const d = new Date();
    const date = d.toDateString();
  return (
      <div>
        <div style={{height:130,width:'100%',backgroundColor:'#249185'}}><div style={{padding:20}}><Link to="/"><Button>Home</Button></Link></div>
        <p className="center-align" style={{color:'white'}}>Alex Cashmore,  {String(date)}</p></div>
        <Pages />
      </div>
  );
}
