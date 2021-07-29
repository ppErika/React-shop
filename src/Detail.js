import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let 박스 = styled.div`
    padding: 20px;
`;
let 제목 = styled.h4`
    font-size: 25px;
    color: ${ props => props.색상 };
`;

function Detail(props) {

    useEffect(() => {
        // 생성되자마자 실행할 코드 (2초 후에 alert 창을 안보이게 하자)
        let 타이머 = setTimeout(() => {alert변경(false) }, 2000);

        // 사라질 때 실행할 코드
        // return function 어쩌구(){ 실행할 코드~~~ }
    });

    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경]=useState('');

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (상품) {
        return 상품.id == id
    })
    let history = useHistory();

    return (
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
            </박스>

            <input onChange={(e)=>{ inputData변경(e.target.value) }} />

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
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;