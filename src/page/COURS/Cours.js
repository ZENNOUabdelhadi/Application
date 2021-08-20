import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './Cours.css';
import tofmath from '../../img/math.jpg'
import tofphysics from '../../img/physics.jpg'
import tofinformatique from '../../img/info.jpg'
import tofchimie from '../../img/chimie.jpg'
import tofgéologie from '../../img/gio.jpg'
import tofbiologie from '../../img/bio.jpg'
function Cours() {
    return (
     <div class="Courscontainer">
     <div class="Courscard">
    <div class="card-header">
      <img src={tofmath} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Mathématique
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Mathématique" className="text">OPEN</Link></button>
     </div>
   </div>

   <div class="Courscard">
    <div class="card-header">
      <img src={tofphysics} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Physique
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Physique" className="text">OPEN</Link></button>
     </div>
   </div>  

   <div class="Courscard">
    <div class="card-header">
      <img src={tofinformatique} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Informatique
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Informatique" className="text">OPEN</Link></button>
     </div>
   </div>  
   <div class="Courscard">
    <div class="card-header">
      <img src={tofchimie} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Chimie
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Chimie" className="text">OPEN</Link></button>
     </div>
   </div>
   <div class="Courscard">
    <div class="card-header">
      <img src={tofgéologie} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Géologie
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Géologie" className="text">OPEN</Link></button>
     </div>
   </div>
   <div class="Courscard">
    <div class="card-header">
      <img src={tofbiologie} alt="ballons" />
    </div>
    <div class="card-body">
     
    <div style={{marginBottom:"5px",fontWeight:"bold",textAlign:"center"}}>
    Biologie
     </div>
     <button class="tag " style={{backgroundColor:"aqua"}}><Link  to="/Biologie" className="text">OPEN</Link></button>
     </div>
   </div>
           
            </div>
    );
}

export default Cours;