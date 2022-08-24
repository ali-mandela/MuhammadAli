import React, { useState } from "react"
import '../css/Navbar.css'
// import {Link} from 'react-router-dom'
import logo from '../img/pp-logo.png'

const logoStyle={
        width:"90px",
        height:"90px",
        border:"2px solid #fff",
        borderRadius:"50%",
};

const hamStyle1={
    right:"0",
};
const hamStyle2={
    right:"-100%",
};


function Navbar() {
    const[Clicked,SetClicked]=useState(false);

    return (<>
        <nav>
        
            <img src={logo} alt="logo" style={logoStyle}/>
            <div className="navmenu"  style={Clicked?hamStyle1:hamStyle2}>
            <ul className="">
                <li><a href="#">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="../img/0101.pfd" target={"_blank"} download>Contact</a></li>
            </ul>
            <div className="socialMedia">
                <i className="fa-2x fa-brands fa-github"></i>
                <i className="fa-2x fa-brands fa-linkedin"></i>
                <i className="fa-2x fa-brands fa-square-instagram"></i>
                <i className="fa-2x fa-solid fa-code"></i>
            </div>
            
            </div>
            <div className="hamMenu">
            <i onClick={()=>{
                SetClicked(!Clicked);
            }} className={Clicked?" fa-4x fa-solid fa-xmark" : " fa-4x fa-solid fa-bars"}/>
            </div>
            
        </nav>
    </>)
}


export default Navbar