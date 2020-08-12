/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [gender, ChangeGender] = useState('남자');
  let [title, retitle] = useState(['코트 추천', '반팔 추천', '반바지 추천']);
  let [sub, resub] = useState(['2월 17일 발행', '6월 24일 발행', '7월 1일 발행']);
  let [num, PlusNum] = useState([0, 0, 0]);
  let [hidden, ChangeModal] = useState(false);
  let [InnerInput, ChangeInput] = useState('');
  let [InnerInput2, ChangeInput2] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div onClick={()=>{}}>개발 Bolg</div>
      </div>
    <button
      onClick={()=>{
        {
          gender === '남자'
          ? ChangeGender('여자')
          : ChangeGender('남자')
        }
      }}>성별
      </button>
      <div className="publish">
        <input onChange={(e)=>{
          // let PlusTitle = [...title]
          // PlusTitle[3] = e.target.value
          // retitle(PlusTitle)
          ChangeInput(e.target.value)
        }}></input>
        <input onChange={(e)=>{
          ChangeInput2(e.target.value)
        }}></input>
        <button onClick={()=>{
          let PlusTitle = [...title];
          let PlusSub = [...sub]
          PlusTitle.unshift(InnerInput);
          PlusSub.unshift(InnerInput2);
          retitle(PlusTitle);
          resub(PlusSub);
        }}>저장</button>
      </div>
    {title.map(function(a, i){
      return (
        <div className="list" key={i}>
          <h3 onClick={()=>{
            hidden === false
            ? ChangeModal(true)
            : ChangeModal(false)
          }}>
          { gender } { a }
          <div>
            {
              hidden === true
              ? <Modal></Modal>
              : null
            }
          </div>
          </h3>
          <p>{ sub[i] }
          <button 
          onClick={()=>{
            let arr = [...num]
            arr[i] += 1;
            PlusNum(arr);
          }}
          className="button_">좋아요</button>
          <button
          onClick={()=>{
            let arr = [...num]
            arr[i] -= 1;
            PlusNum(arr);
          }}
          className="button_">싫어요</button>
          <span>👍</span>
          { num[i] }
          </p>
          <hr/>
        </div>
      )})}
    </div>
  )

}

function Modal() {
  return(
    <div className="modal">
      <h3>contents</h3>
    </div>
  )
}

export default App;