import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '남자 반팔 추천', '남자 반바지 추천']);
  let [글내용,글내용변경] = useState(['2월 17일 발행', '6월 24일 발행', '7월 1일 발행']);

  function name(){
    let i = 0;
    while (i < useState.length) {
      return (
        <div>
        <h3>{글제목[i]}</h3>
        <p>{글내용[i]}</p>
        <hr/>
        </div>
      );
      i = i + 1;
  }
}

  let posts = "강남 고기 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Bolg</div>
      </div>
      <div className="list">
        {name()}
      </div>
    </div>
  );
}

export default App;
