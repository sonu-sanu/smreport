
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import {Button}  from "react-bootstrap";
import Banner from "./Banner";
import Footer from "./footer";
import LoginForm from "./login";

 
function Page()
{
    return(
    <>

   
      
    
     
     <Col sm ={3}  >  </Col>
     <Col  sm ={6} className="center-screen" >
     <LoginForm /> 
     </Col>
       <Col sm={3} > </Col>
     

         
          
    </>
    );
}
export default Page;