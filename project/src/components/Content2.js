import React, { useState } from 'react';
import Data from './Data'

function Content2(){

let [Contents] = useState(Data)

    function li_contents(){      
        return(
          Contents.map((a, i)=>{
            return(
            <li>
              <article className="item__image">
                <div className="item__inner">
                    <div className="item__infos">
                        <h4>{ Contents[i].title }</h4>
                        <h6>{ Contents[i].sub}</h6>
                    </div>
                    <div className="item__media">
                        <img src={ Contents[i].image } alt="" className="img__size"></img>
                    </div>
                </div>
              </article>
            </li>
        )})
      )}

      function row_contents(){
          return(
          <div className="row">
            <div className="Genres">
              <h4>Features</h4>
            </div>
            <div className="All_genres">
              <h4><a className="slider__items-all" href="/">
                <span>All features</span>
              </a></h4>
            </div>
          </div>        
      )}
  
    return(
        <section>
            {row_contents()}
  
        <div className="slider__items-slider">
          <div>
            <ul className="slider__items-slides">

                {li_contents()}
  
            </ul>
          </div>
        </div>
      </section>
    )
}
export default Content2;