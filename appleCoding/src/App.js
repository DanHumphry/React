/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [gender, ChangeGender] = useState('남자');
  let [title, retitle] = useState([gender + '코트 추천', gender + '반팔 추천', gender + '반바지 추천']);
  let [sub, resub] = useState(['2월 17일 발행', '6월 24일 발행', '7월 1일 발행']);
  let [num, PlusNum] = useState([0, 0, 0]);
  let [modal, ChangeModal] = useState(false)

  function ChangeGirl(){
    let arr = [...gender];
    arr = '여자';
    ChangeGender(arr);
  }

  // function ChangeNumber(){
  //   let arr2 = [...num];
  //   arr2[0] += 1 ;
  //   PlusNum(arr2)
  // }

    let contents = [];
    let i = 0;
    let arr2 = [...num];
    while (i < title.length) {
      contents.push(
        <div>
        <h3>{title[i]}<span onClick={ ()=>{
          arr2[i] += 1 ;
          PlusNum(arr2);
        } }>👍</span> {num[i]} </h3>
        <p>{sub[i]}</p>
        <hr/>
      </div>
      )
      i = i + 1;
  }

  // let posts = "강남 고기 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div onClick={()=>{
          {
            modal === false
            ? ChangeModal(true)
            : ChangeModal(false)
          }
        }}>개발 Bolg</div>
      </div>
      <div className="list">
        {contents[0]}
        {contents[1]}
        {contents[2]}
        <button onClick={()=>{ChangeGirl()}}>여자</button>
        {/* <button onClick={()=>{ChangeNumber()}}>숫자</button> */}
      </div>
    
    {
      modal === true
      ? <Modal></Modal>
      : null
    }

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
