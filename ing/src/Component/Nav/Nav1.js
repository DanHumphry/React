import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav1(props) {
    let [nav1] = useState(["내 북마크", "팀 북마크"])

  return (
    <div className="nav1">
        <h1>BMark</h1>
        <div className="Login">
            <span><Link to="/login">로그인</Link></span>
            <span><Link to="/join">회원가입</Link></span>
        </div>
        <ul>
        {
            nav1.map((a, i)=>{
            return(
                <li key={i} onClick={()=>{
                    props.setNavModal(2)
                    props.setFoldStyle({display : "block"})
                }}>{a}</li>
            )
            })
        }
        </ul>
    </div>
  );
}

export default Nav1;
