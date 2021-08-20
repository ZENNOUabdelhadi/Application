import React from 'react';
import '../component/Navbar.css';
import { Carousel } from 'antd';
import PHOTO1 from "../img/1.jpg";
import PHOTO2 from "../img/2.jpg";
import PHOTO3 from "../img/4.PNG";
import PHOTO4 from "../img/form.PNG";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
function About() {
    return (
        <Carousel afterChange={onChange}>
        <div>
        
        <img className="card-img-top" src={PHOTO1} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
      </div>
      <div>
       
        <img className="card-img-top" src={PHOTO2} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
        <p> ZENNOU Abdelhadi</p>
      </div>
      <div>
        
        <img className="card-img-top" src={PHOTO3} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
      </div>
      <div>
        
        <img className="card-img-top" src={PHOTO4} alt="1" style={{width:"600px", display:"block", margin:"auto",padding:"auto"}} />
      </div>
      </Carousel>
    );
}

export default About;