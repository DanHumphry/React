import { useState } from 'react';
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
  let imgVal = [img0, img1, img2, img3, img4, img5]
  let centerBackgrountImage = {
    backgroundImage : "url(" + img + ")"
  }
  let leftBackgrountImage = {
    backgroundImage : "url(" + leftImg + ")"
  }
  let rightBackgrountImage = {
    backgroundImage : "url(" + rightImg + ")"
  }

  

  return (
    <>
    <div className="body">
      <div className="mainBody">
        <div className="header__margin">
          <div className="mainBody__padding">
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
              <div className="slide__acticle__left" style={leftBackgrountImage} onClick={()=>{
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
              }}>

              </div>
              <div className="slide__acticle__center" style={centerBackgrountImage}>

              </div>
              <div className="slide__acticle__right" style={rightBackgrountImage} onClick={()=>{
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
              }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
