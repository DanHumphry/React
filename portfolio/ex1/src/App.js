import { useState, useRef } from 'react';
import './App.css';
import img0 from './img/1.jpg'
import img1 from './img/2.jpg'
import img2 from './img/3.jpg'
import img3 from './img/4.jpg'
import img4 from './img/5.jpg'
import img5 from './img/6.jpg'

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

  const handleLeftClick = () => {
    left.current.style.animation = "0.4s ease-in-out 0s 1 forwards backLeftSlide";
    right.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerRightSlide";
    center.current.style.animation = "0.4s ease-in-out 0s 1 forwards leftCenterSlide";
  }

  const handleRightClick = () => {
    left.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerLeftSlide";
    right.current.style.animation = "0.4s ease-in-out 0s 1 forwards backRightSlide";
    center.current.style.animation = "0.4s ease-in-out 0s 1 forwards rightCenterSlide";
  }

  const handleAnimationEnd = () => {
    left.current.style.animation = "none";
    right.current.style.animation = "none";
    center.current.style.animation = "none";
  }

  let [detailModal, setDetailModal] = useState(false);

  return (
    <>
    <div className="body">
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
                <div className="slide__back__left">
                </div>
                <div className="slide__back__left__center">
                </div>
              </div>

              <div className="slide__back__section">
                <div className="slide__back__right__center">
                </div>
                <div className="slide__back__right">
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
              
                <div className="slide__acticle__center" style={centerImgAnimation} ref={center} onAnimationEnd={handleAnimationEnd} onClick={(e)=>{
                  setDetailModal(!detailModal)
                }}>
                  <div className="slide__dec__position">
                    <div className="slide__dec__header">
                      <p>& Page 1</p>
                    </div>
                    
                    <div className="slide__dec__footer">
                      <h1>Sample Title</h1>
                      <p className="footer_dec">Sample dec sample dec sample dec sample dec sample dec sample dec sample dec sample dec sample dec</p>
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
        <div className="detail__img__article">
        </div>
        <div className="detail__right__section">
          <div className="detail__out__buttion">
            <button>나가기</button>
          </div>
          <div className="detail__info">
            <h1>Detail Title</h1>
            <h3>Detail Sub</h3>
          </div>
          <div className="detail__content">
            <h3>Detail dec</h3>
          </div>
          <div className="detail__slkill">
            <h3>언어</h3>
            <h3>기술</h3>
          </div>
          <div className="detail__view">
            <p>자세히</p>
            <p>방문</p>
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
