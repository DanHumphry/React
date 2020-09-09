import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../css/QA.css'

function QA(){

    let [boardList, setBoradList] = useState([])
    useEffect(()=>{
        (()=> {
        try{
            fetch('http://localhost:8000/api/borads/')
            .then((res)=>res.json())
            .then((posts)=>{
                setBoradList(posts)
            })
        } catch(e){
            console.log(e)
        }
        })();
    },[])

    return(
        <div className="container">
            <div className="content-left">
                <div className="head">
                    <main className="site-main">
                        <article className="post-page">
                            <header className="entry-header">
                                <h1>Q&A</h1>
                                <h1>자유게시판</h1>
                                <div className="header-underline"></div>
                            </header>
                            <div className="entry-content">
                                <div className="content-list">
                                    <div className="list-header">
                                        <div className="board-sort">
                                            <form>
                                                <select className="list-sort">
                                                    <option value="newest">최신순</option>
                                                    <option value="best">추천순</option>
                                                    <option value="viewed">조회순</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="board-list">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className="title">제목</td>
                                                    <td className="user">작성자</td>
                                                    <td className="comment">댓글</td>
                                                    <td className="vote">추천</td>
                                                    <td className="view">조회</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    boardList.map((a)=>{
                                                        return(
                                                            <tr key={a.id}>
                                                                <td className="title">{a.title}</td>
                                                                <td className="user">{a.username}</td>
                                                                <td className="comment">{a.comment}</td>
                                                                <td className="vote">{a.like}</td>
                                                                <td className="view">{a.view}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="pagination">
                                        <ul>
                                            <li><Link to="/">1</Link></li>
                                            <li><Link to="/">2</Link></li>
                                            <li><Link to="/">3</Link></li>
                                            <li><Link to="/">4</Link></li>
                                            <li><Link to="/">5</Link></li>
                                            <li><Link className="next-page" to="/">»</Link></li>
                                            <li><Link className="last-page" to="/">마지막</Link></li>
                                        </ul>
                                    </div>
                                    <div className="search">
                                        <form>
                                            <select>
                                                <option>전체</option>
                                                <option value="title">제목</option>
                                                <option value="username">작성자</option>
                                            </select>
                                            <input type="text"></input>
                                            <button type="submit" className="searchADNcontrol">검색</button>
                                        </form>
                                    </div>
                                    <div className="control">
                                        <Link to="/write" className="searchADNcontrol">글쓰기</Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
        
    )
}
export default QA;