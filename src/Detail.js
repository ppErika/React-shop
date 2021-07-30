import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let box = styled.div`
    padding: 20px;
`;
let title = styled.h4`
    font-size: 25px;
    color: ${props => props.색상};
`;

function Detail(props) {
    let [alert, alert변경] = useState(true);

    useEffect(() => {
        // 생성되자마자 실행할 코드 (2초 후에 alert 창을 안보이게 하자)
        let 타이머 = setTimeout(() => { alert변경(false) }, 2000);
        return ()=>{ clearTimeout(타이머) }
    },[alert]);


    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (상품) {
        return 상품.id == id
    })
    let history = useHistory();

    return (
        <div className="container">
            <box>
                <title className="red">Detail</title>
            </box>

            {
                alert === true
                    ? (
                        <div className="my-alert-yellow">
                            <p>재고가 얼마 남지 않았습니다!</p>
                        </div>
                    )
                    : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품.id + 1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>

                    <Info 재고={props.재고[찾은상품.id]} ></Info>


                    <button className="btn btn-danger" onClick={ ()=>{ props.재고변경([9,11,12])
                     } }>주문하기</button>
                    <button className="btn btn-danger" onClick={() => { history.goBack()
                     }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function Info(props) {
    return (
        <p>재고: {props.재고}</p>
    )
}


export default Detail;