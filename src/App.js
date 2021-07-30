/* eslint-disable */

import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import ShoesData from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(ShoesData);
  let [더보기버튼, 더보기버튼변경] = useState(true);
  let [count, count변경] = useState(0);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">shopSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home </Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
            <div className="row">
              {
                shoes.map((a, i) => {
                  return (
                    <Card shoes={shoes[i]} i={i} key={i} />
                  )
                })
              }
            </div>

            {
              더보기버튼 === true
                ? (
                  <button className="btn btn-primary" onClick={() => {

                    // 로딩중이라는 UI 띄움

                    axios.get("https://codingapple1.github.io/shop/data" + (count + 2) + ".json")
                      // Ajax요청 성공 시
                      .then((result) => {

                        // 로딩중이라는 UI 안보이게 처리

                        // 다음이 있는 지 테스트
                        axios.get("https://codingapple1.github.io/shop/data" + (count + 3) + ".json")
                        .then((result) => {
                          console.log(result)
                        })
                        .catch(() => {
                          console.log('이후 페이지가 없습니다')
                          더보기버튼변경(false)
                        })

                        console.log(result)
                        shoes변경([...shoes, ...result.data])
                        count변경(count + 1)

                      })

                      // Ajax요청 실패 시
                      .catch(() => {

                        // 로딩중이라는 UI 안보이게 처리

                        console.log('실패했어요')
                        더보기버튼변경(false)
                      })

                  }}>더보기</button>
                )
                : null
            }

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
