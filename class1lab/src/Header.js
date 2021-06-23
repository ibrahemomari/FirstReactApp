import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';

class Header extends React.Component{

  render(){
      return(
          <header>
                <Row>
                    <h1>Horned Beast</h1>
                </Row>
           
          </header>
      )
  }
}

export default Header;