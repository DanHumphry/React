import React, { useState } from 'react';
import Data_2 from './Content_2_data';

function Content2(){

    let [Content2] = useState(Data_2)

    function li_contnets(){
        return(
            Content2.map((a, i)=>{
                return(
                    <li>
                        <article className="article__size">
                            <div>
                                <img src={Content2[i].image} alt="" className="img__size"></img>
                            </div>
                            <div className="InArticle__text">
                                <h3>{Content2[i].title}</h3>
                                <h6>{Content2[i].sub}</h6>
                                <h6>{Content2[i].describe}</h6>
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
export default Content2;