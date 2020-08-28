import React from 'react';
import {Link} from 'react-router-dom';
import LoginModal from './LoginModal';
import '../css/Header.css'
function Header(props){
  return(
    <>
      <div className="header">
        <div className="header-nav">
          <div className="header-nav-links">
            <Link className="header-logo" to="/">Velog</Link>
            <Link className="header-search" to="/serch"><button><span role = "img"aria-label = "물음표">❔</span></button></Link>
            <Link className="header-dashboard" to="/dashboard"><button>새 글 작성</button></Link>
            <button onClick={()=>{props.setModal(!props.modal)}} className="header-btn">로그인</button>
          </div>
        </div>
      </div>
        {
          props.modal === true
          ? <LoginModal userName={props.userName} setUserName={props.setUserName} setModal={props.setModal}/>
          : null
        }
    </>
  )
}

export default Header;