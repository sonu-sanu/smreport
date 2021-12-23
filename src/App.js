import logo from './logo.svg';
import './App.css';
import Page from './components/page';
import Footer from './components/footer';
import Dash from './components/dash';
import { BrowserRouter ,   Routes, Route } from "react-router-dom";
import Frame from './components/frame';
import Banner from './components/Banner';
import Home from  './components/Home';
import { Container, Row } from 'react-bootstrap';
function App() {
  return (
      
        <>


   <BrowserRouter>


        <Container fluid>
              <Row>
                 <Banner /> 
               </Row>
           <Row>  
                    <Routes>
                         <Route exact path='/' element={<Home />} />
                         <Route path='/frame' element={<Frame /> } />
                    </Routes>
           </Row>
       
       <Row>
       <Footer />
       </Row>
       </Container> 
   </BrowserRouter>
        </>
        
  );
}

export default App;
