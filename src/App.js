import React from 'react';
import Pages from './components/PageRoutes';
import {Link} from "react-router-dom";
import {Button} from "react-materialize";


export default function App() {
  return (
      <div>
        <div style={{height:130,width:'100%',backgroundColor:'#5ab0dc'}}><h4>mock react app (Alex Cashmore)</h4><Link to="/"><Button>Home</Button></Link></div>
        <Pages />
      </div>
  );
}
