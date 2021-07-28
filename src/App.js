/* eslint-disable */

import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import ShoesData from './data.js';

import { Link, Route, Switch } from 'react-router-dom';

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

      <Route exact path="/">
        <div>메인 페이지에요.</div>
      </Route>
      <Route path="/detail">
        <div>상세 페이지에요.</div>
      </Route>
      {/* <Router path="/어쩌구" component={ Modal }></Router> */}

      <div className="container">
        <div className="row">
          {
            shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} key={i} />
            })
          }
        </div>
      </div>


    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
