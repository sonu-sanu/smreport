import React, { Component } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
 
import Sidebar from "./LeftMenubar"
 
 
const Dash = props => {
   

    return (
        <>
          
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <div>this is a test</div>
                        
                    </Col> 
               

         
        </>
        );
  };
   
  export default Dash