/* eslint-disable */

import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import ShoesData from './data.js';

function App() {
  let [shoes, shoes변경] = useState(ShoesData);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shopSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="Jumbotron">
        <div>
          <h1>BIG SALE!!</h1>
          <p>어쩌구 저쩌구 이런 저런 문구들</p>
          <Button variant="primary">more</Button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Card shoes={shoes}/>
          <Card shoes={shoes}/>
          <Card shoes={shoes}/>
        </div>
      </div>


    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content} & {props.shoes[0].price}</p>
    </div>
  )
}

export default App;
