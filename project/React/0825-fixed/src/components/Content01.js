import React, { useState } from 'react'
import Data from './Content01_Data'
function Content01(){

    let [filterList, setFilterList] = useState([{language: 'Python'}, {language : 'React'}, {language : 'Java'}, {language :'C#'}, {language:'C'}, {language:'C++'}, {language:'GO'}, {language:'Javascript'}, {language:'Html,CSS'}])

    return(
    <div className="gLLJLX">
        <main className="BAccj">
            <ul>
            {
              Data.map((a,i)=>{
                return(
                <li>
                  <div className="dvLbCX">
                    <a href="/">
                      <div>
                        <img src={a.img}></img>
                      </div>
                    <div className="eBFCWh">
                        <h4>{a.title}</h4>
                        <div>
                          <p>{a.content}</p>
                        </div>
                    </div>
                    </a>
                  </div>
                </li>
              )
              })
            }  
            </ul>
        </main>

        <aside className="pDRpR">
          <div className="eyrfCG">
            <div className="filter__head">
              <h2>강의정보</h2>
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
export default Content01;