import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/Trend.css';
import Data from './Trend-data';
function Trend(){
    let [filterList] = useState([{id : 1, language: 'Python'}, {id : 2, language : 'React'}, {id : 3, language : 'Java'}, {id : 4, language :'C#'}, {id : 5, language:'C'}, {id : 6, language:'C++'}, {id : 7, language:'GO'}, {id : 8, language:'Javascript'}, {id : 9, language:'Html,CSS'}])

    return(
        <div className="trend-section">
            <main className="trend-main">
                <div className="main-section">
                    <div className="article">
                        {
                            Data.map((a)=>{
                                return(
                                    <>
                                        <Link to="/">
                                            <div className="arcticle-img">
                                                <img src={a.img} alt=""></img>
                                            </div>
                                        </Link>
                                        <div className="article-content">
                                            <Link to="/">
                                                <h4>{a.title}</h4>
                                                <div className="desc-wrapper">
                                                    <p>{a.desc}</p>
                                                </div>
                                            </Link>
                                            <div className="sub-info">
                                                <span>{a.date}</span>
                                                <span className="separator">·</span>
                                                <span>{a.comment}개의 댓글</span>
                                            </div>
                                        </div>
                                        <div className="article-footer">
                                            <Link to="/">
                                                <img src="/" alt=""></img>
                                                <span>"by " <b>{a.username}</b></span>
                                            </Link>
                                            <div className="likes">
                                                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                                                {a.like}
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <aside className="pDRpR">
            <div className="eyrfCG">
                <div className="filter__head">
                </div>
                <section>
                <ul>
                    {
                    filterList.map((a)=>{
                        return(
                        <li key={a.id}>
                            <input id={a.language} className="filters-input__checkbox" value="action" type="checkbox" data-type="genres"></input>
                            <label className="input__label | filters-input__label--checkbox" htmlFor={a.language}>
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