

import React from "react";
import {Nav} from "react-bootstrap";
 
  
const Sidebar=()=>
{

 return(

    <>
    
    <div className="sidenav-style">
     <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
    </ul>
    </div>
</>
 )


}


export default Sidebar;