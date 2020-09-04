import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/Trend.css';
function Trend(){
    let [filterList, setFilterList] = useState([{language: 'Python'}, {language : 'React'}, {language : 'Java'}, {language :'C#'}, {language:'C'}, {language:'C++'}, {language:'GO'}, {language:'Javascript'}, {language:'Html,CSS'}])
   
    return(
        <div className="trend-section">
            <main className="trend-main">
                <div className="main-section">
                    <div className="article">
                        <Link to="/">
                            <div className="arcticle-img">
                                <img src="/" alt=""></img>
                            </div>
                        </Link>
                        <div className="article-content">
                            <Link to="/">
                                <h4>Title</h4>
                                <div className="desc-wrapper">
                                    <p>Desc</p>
                                </div>
                            </Link>
                            <div className="sub-info">
                                <span>현재날자</span>
                                <span className="separator">·</span>
                                <span>"5"개의 댓글</span>
                            </div>
                        </div>
                        <div className="article-footer">
                            <Link to="/">
                                <img src="/" alt=""></img>
                                <span>"by " <b>username</b></span>
                            </Link>
                            <div className="likes">
                                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                                "12"
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <aside className="pDRpR">
            <div className="eyrfCG">
                <div className="filter__head">
                <a href="/">
                    <h2>강의정보</h2>
                </a>
                <a href="/">
                    <h2>부트캠프정보</h2>
                </a>
                <a href="/">
                    <h2>개인 포스팅 추천</h2>
                </a>
                </div>
                <section>
                <ul>
                    {
                    filterList.map((a)=>{
                        return(
                        <li>
                            <input id={a.language} className="filters-input__checkbox" value="action" type="checkbox" data-type="genres"></input>
                            <label className="input__label | filters-input__label--checkbox" for={a.language}>
                            <span>{a.language}</span>
                            <span className="filters-input__tick">
                                <svg focusable="false" aria-hidden="true">
                                <use xlinkHref="#check">
                                    <svg viewBox="0 0 24 24" id="check" xmlns="http://www.w3.org/2000/svg"><path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436L24 5.782z"></path></svg>
                                </use>
                                </svg>
                            </span>
                            </label>
                        </li>
                        )
                    })
                    }
                </ul>
                </section>
            </div>  
            </aside>
        </div>
    )
}
export default Trend;