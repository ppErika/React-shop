/* eslint-disable */

import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import ShoesData from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(ShoesData);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">shopSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="Jumbotron">
            <div>
              <h1>BIG SALE!!</h1>
              <p>어쩌구 저쩌구 이런 저런 문구들</p>
              <Button variant="primary">more</Button>
            </div>
          </div>
          <div className="container">
            <Button variant="warning" onClick="">가격순 정렬</Button>
            <div className="row">
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이걸 보여줘</div>
        </Route>

      </Switch>

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
