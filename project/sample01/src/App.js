import React from 'react';
import Header from './component/Header';
import Content1 from './component/Content_1';
import './css/Header.css';
import './css/Contents.css'
import Content2 from './component/Content_2';

function App() {
  return (
    <div>
      <Header/>
      <Content1/>
      <Content2/>
    </div>
  );
}

export default App;
