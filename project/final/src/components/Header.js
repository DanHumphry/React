import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css'
import nomalImage from '../img/red.jpg'
function Header(props){

  const [userprofile, setUserprofile] = useState(false)
  const [userImage, setUserImage] = useState()

  return(
    <>
      <div className="header">
        <div className="header-nav">
          <div className="header-nav-links">
            <Link className="header-logo" to="/">Velog</Link>
            <Link className="header-search" to="/serch"><button><span role = "img" aria-label = "물음표">❔</span></button></Link>
            {
              props.modal === false
              ? <Link to="/login"><button className="header-btn">로그인</button></Link>
              : (
                <>
                <Link className="header-dashboard" to="/dashboard"><button>새 글 작성</button></Link>
                <div className="user-container" onClick={()=>{setUserprofile(!userprofile)}}>
                  <img src={nomalImage} className="user-image" alt="/"></img>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                </div>
                {
                  userprofile === true
                  ?(
                    <div className="user-profile">
                      <div className="profile-menu">
                        <Link><div className="menu">내가 쓴 글</div></Link>
                        <Link><div className="menu">임시 글</div></Link>
                        <Link><div className="menu">내 정보</div></Link>
                        <Link><div className="menu">로그아웃</div></Link>
                      </div>
                    </div>
                  )
                  :null
                }
                </>
              )
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;