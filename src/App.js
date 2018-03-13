import React from 'react';
import Pages from './components/PageRoutes';
import {Link} from "react-router-dom";
import {Button} from "react-materialize";


export default function App() {
  return (
      <div>
        <div style={{height:130,width:'100%',backgroundColor:'#249185'}}><div style={{padding:20}}><Link to="/"><Button>Home</Button></Link></div>
        <p className="center-align" style={{color:'white'}}>mock react app - Alex Cashmore - 13/03/2018</p></div>
        <Pages />
      </div>
  );
}
