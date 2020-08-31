import React from 'react';
import '../css/Board.css';
import { useHistory } from 'react-router'

function Board(){
    const histoty = useHistory()
  return(
    <> 
        <section className="container">
            <article className="write">
            <div className="post-title">
                <textarea name="" id="" cols="30" rows="10"  placeholder="제목을 입력하세요"></textarea>
            </div>
            <div className="post-content">
                <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요"></textarea>
            </div>
            <footer className="post-comment">
                <button className="exit-btn transparent-btn" onClick={histoty.goBack()}>✔ 나가기</button>
                <div>
                <button className="transparent-btn">발행</button>
                </div>
            </footer>
            </article>
        </section>
    </>
  )
}

export default Board;