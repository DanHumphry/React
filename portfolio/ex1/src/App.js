import { useState, useRef } from 'react';
import './App.css';
import img0 from './img/1.jpg'
import img1 from './img/2.jpg'
import img2 from './img/3.jpg'
import img3 from './img/4.jpg'
import img4 from './img/5.jpg'
import img5 from './img/6.jpg'
import {Link} from 'react-router-dom';

function App() {

  let [img, setImg] = useState(img0);
  let [leftImg, setLeftImg] = useState(img5);
  let [rightImg, setRightImg] = useState(img1);
  let imgVal = [img0, img1, img2, img3, img4, img5];

  let leftBackgrountImage = {
    backgroundImage : "url(" + leftImg + ")",
  }
  let rightBackgrountImage = {
    backgroundImage : "url(" + rightImg + ")",
  }
  let centerImgAnimation = {
    backgroundImage : "url(" + img + ")",
  }

  const leftActicleOnClickChangImg = ()=>{
    imgVal.reverse().map((a, i)=>{
      if (img === imgVal[i]) {
        setLeftImg(imgVal[i+2]);
        setImg(imgVal[i+1]);
        setRightImg(imgVal[i]);
        if (i === imgVal.length - 2) {
          setLeftImg(imgVal[0]);
        }
        if (i === imgVal.length - 1) {
          i = 0;
          setImg(imgVal[i])
          setLeftImg(imgVal[i+1]);
        }
      }
      return null;
    })
  }
  const rightActicleOnClickChangImg = ()=>{
    imgVal.map((a, i)=>{
      if (img === imgVal[i]) {
        setLeftImg(imgVal[i]);
        setImg(imgVal[i+1]);
        setRightImg(imgVal[i+2]);
        if (i === imgVal.length - 2) {
          setRightImg(imgVal[0]);
        }
        if (i === imgVal.length - 1) {
          i = 0;
          setImg(imgVal[i])
          setRightImg(imgVal[i+1]);
        }
      }
      return null;
    })
  }

  const left = useRef();
  const right = useRef();
  const center = useRef();

  const backCenter = useRef();
  const backCenterRight = useRef();
  const backCentLeft = useRef();
  const backLeft = useRef();
  const backRight = useRef();
  

  const handleLeftClick = () => {
    left.current.style.animation = "0.4s ease-in-out 0s 1 forwards backLeftSlide";
    right.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerRightSlide";
    center.current.style.animation = "0.4s ease-in-out 0s 1 forwards leftCenterSlide";
    backCenter.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backCenterRight.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backCentLeft.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backLeft.current.style.animation = "0.4s ease-in-out 0s 1 leftBackSlide"
    backRight.current.style.animation = "0.4s ease-in-out 0s 1 rightBackSlide"
  }

  const handleRightClick = () => {
    left.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerLeftSlide";
    right.current.style.animation = "0.4s ease-in-out 0s 1 forwards backRightSlide";
    center.current.style.animation = "0.4s ease-in-out 0s 1 forwards rightCenterSlide";
    backCenter.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backCenterRight.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backCentLeft.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
    backRight.current.style.animation = "0.4s ease-in-out 0s 1 rightBackSlide"
    backLeft.current.style.animation = "0.4s ease-in-out 0s 1 leftBackSlide"
  }

  const handleAnimationEnd = () => {
    left.current.style.animation = "none";
    right.current.style.animation = "none";
    center.current.style.animation = "none";
    backCenter.current.style.animation = "none";
    backCenterRight.current.style.animation = "none";
    backCentLeft.current.style.animation = "none";
    backLeft.current.style.animation = "none";
    backRight.current.style.animation = "none";
  }

  let [detailModal, setDetailModal] = useState(false);

  return (
    <>
    <div className="body bird-container">
      <div className="mainBody">
  {
    detailModal === false
    ?(
      <>
        <div className="myContactInfo">
          <p className="info__header">CONTACT</p>
          <div className="mySocial">
            <p>1996. 4. 9 김대현</p>
            <p>dan-@kakao.com</p>
            <p>+82 1041373153</p>
          </div>
        </div>

        <div className="header__margin">
          <div className="mainBody__padding">
            <div className="slide__shadow">
            </div>
          <div className="slide__back">
            <div className="slide__back__display">

              <div className="slide__back__section">
                <div className="slide__back__left" ref={backLeft} onAnimationEnd={handleAnimationEnd}>
                </div>
                <div className="slide__back__left__center" ref={backCentLeft} onAnimationEnd={handleAnimationEnd}>
                </div>
              </div>

              <div className="slide__back__section">
                <div className="slide__back__center" ref={backCenter} onAnimationEnd={handleAnimationEnd}>
                </div>
              </div>

              <div className="slide__back__section">
                <div className="slide__back__right__center" ref={backCenterRight} onAnimationEnd={handleAnimationEnd}>
                </div>
                <div className="slide__back__right" ref={backRight} onAnimationEnd={handleAnimationEnd}>
                </div>
              </div>

            </div>

            </div>
            <div className="slide__section">
              <div className="slide__acticle__left" style={leftBackgrountImage} ref={left} onAnimationEnd={handleAnimationEnd}
              onClick={()=>{
                leftActicleOnClickChangImg();
                handleLeftClick();
              }}>
              </div>
              
                <div className="slide__acticle__center" style={centerImgAnimation} ref={center} onAnimationEnd={handleAnimationEnd} onClick={()=>{
                  setDetailModal(!detailModal)
                }}>
                  <div className="slide__dec__position">
                    <div className="slide__dec__header">
                      <p>& Page 1</p>
                    </div>
                    
                    <div className="slide__dec__footer">
                      <h1>Project Title</h1>
                      <p className="footer_dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                  </div>
                </div>

              
              <div className="slide__acticle__right" style={rightBackgrountImage} ref={right} onAnimationEnd={handleAnimationEnd}
              onClick={()=>{
                rightActicleOnClickChangImg();
                handleRightClick();
              }}>
              </div>

            </div>
          </div>
        </div>
      </>
  )
  :(
    <>
      <div className="detail__main__padding">
        <div className="detail__img__article" style={centerImgAnimation}>
        </div>
        <div className="detail__right__section">
          <div className="detail__out__buttion">
            <svg className="icon-longarrow" viewBox="0 0 54 24" onClick={()=>{
                setDetailModal(!detailModal)}}>
              <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z"></path>
            </svg>
          </div>
          <div className="detail__info">
            <h1>Project Title</h1>
            <h3>& Page 1</h3>
          </div>
          <div className="detail__content">
            <ul>
              <li>1.session을 이용한 로그인과 회원가입,</li>
              <li>2.회원가입시 기본프로필 이미지를 부여, 닉네임과 더불어 수정이 가능하고,</li>
              <li>3.회원가입한 유저의 db정보를 삭제시키는 간단한 회원탈퇴,</li>
              <li>4.게시판의 기본적인 crud,</li>
              <li>5.게시글의 pagination,</li>
              <li>6.게시글의 추천수와 최신수에 따라 정렬이 가능한 select option,</li>
              <li>7.게시글의 keyword에 해당하는 content 또는 title을 포함하는 검색기능</li>
              <li>8.댓글과 대댓글</li>
              <li>9.접속된 유저들끼리 주고받을 수 있는 websocket의 채팅</li>
            </ul>
          </div>
          <div className="detail__skill">
            <div className="detail__lang">
              <h3>언어</h3>
              <p>JAVA</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>MYSQL</p>
            </div>
            <div className="datail__technique">
              <h3>기술</h3>
              <p>JSP</p>
              <p>Servlet</p>
              <p>WebSocket</p>
              <p>Ajax</p>
            </div>
          </div>
          <div className="detail__view">
            <div>
              <h3>
                블로그
              </h3>
              <Link to="#">
                LINK
              </Link>
            </div>
            <div>
              <h3>
                호스팅
              </h3>
              <Link to="/">
                LINK
              </Link>
            </div>
          </div>
        </div>

        <div className="myContactInfo myContactInfo__detail">
          <p className="info__header">CONTACT</p>
          <div className="mySocial">
            <p>1996. 4. 9 김대현</p>
            <p>dan-@kakao.com</p>
            <p>+82 1041373153</p>
          </div>
        </div>

      </div>
    </>
  )
}
      </div>
    </div>
    </>
  );
}

export default App;
