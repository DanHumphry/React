import React, { useState } from 'react';
import Data_1 from './Content_1_data';

function Content1(){

    let [Content1] = useState(Data_1)

    function li_contnets(){
        return(
            Content1.map((a, i)=>{
                return(
                    <li>
                        <article className="article__size">
                            <div>
                                <img src={Content1[i].image} alt="" className="img__size"></img>
                            </div>
                            <div className="InArticle__text">
                                <h3>{Content1[i].title}</h3>
                                <h6>{Content1[i].sub}</h6>
                                <h6>{Content1[i].describe}</h6>
                            </div>
                        </article>
                    </li>
                )
            })
        )
    }

    return(
        <div>
            <ul className="content_ul">
                {li_contnets()}
            </ul>
        </div>
    )
}
export default Content1;