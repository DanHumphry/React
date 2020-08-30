import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Work from './Work';
import '../css/Navi.css';

function Navi(){

    let [underline, setUnderline] = useState({left:"0%"})
    let [choseContent, setChoseContent] = useState()

    return(
        <>
        <div className="navi-container">
            <div className="navi-box">
                <Link className="navi-trend" to="/" onClick={()=>{
                    setUnderline({left:"0%"})
                    setChoseContent()
                }}>
                    <span role = "img" aria-label = "하트">🤞트렌드</span>
                </Link>
                <Link className="navi-new" to="/" onClick={()=>{
                    setUnderline({left:"20%"})
                    setChoseContent()
                }}>
                    <span role = "img" aria-label = "시계">⏲최신</span>
                </Link>
                <Link className="navi-work" to="/" onClick={()=>{
                    setUnderline({left:"40%"})
                    setChoseContent(<Work/>)
                }}>
                    <span role = "img" aria-label = "악수">🤝구인</span>
                </Link>
                <Link className="navi-class" to="/" onClick={()=>{
                    setUnderline({left:"60%"})
                    setChoseContent()
                }}>
                    <span role = "img" aria-label = "공부">✍강의</span>
                </Link>
                <Link className="navi-question" to="/" onClick={()=>{
                    setUnderline({left:"80%"})
                    setChoseContent()
                }}>
                    <span role = "img" aria-label = "질문">🤷‍♂️Q & A</span>
                </Link>
                <div className="navi-underline" style={underline}></div>
            </div>
        </div>
        { choseContent }
        </>
    )
}
export default Navi;