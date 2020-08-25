import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';
// import KaKaoLogin from 'react-kakao-login';

function Modal(props){
    let [ChageLogin,setChangeLogin] = useState('로그인')
    let [LoginState,setLoginState] = useState(false)

    let [LoginEmail,setLoginEmail] = useState("")
    let [LoginPassword,setLoginPassword] = useState("")

    let [JoinName,setJoinName] = useState("")
    let [JoinEmail,setJoinEmail] = useState("")
    let [JoinPassword,setJoinPassword] = useState("")

    // const responseGoogle = res => {
    //     props.setUserName(res.profileObj.name);
    //     props.setUserEmail(res.profileObj.email);
    //     props.setUserImg(res.profileObj.imageUrl);
    // }

  function ChcekLogin(){
    {
      
    }
    
  }

    useEffect(()=>{
        (async ()=> {
          try{
            fetch('url')
            .then((res)=>res.json())
            .then((posts)=>{
            //   setPosts(posts)
            })
          } catch(e){
            console.log(e)
          }
        })();
      },[])

    return(
      <>
        <div className="container">
          <div className="container-box">
            <div className="exit">
              <button onClick={ ()=>{ props.setModal() } }>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" tabindex="1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
              </button>
            </div>
            <div className="login">
              <div className="login-box">
                <div className="login-box2">
                  <h2>{ChageLogin}</h2>
                  <section className="section1">
                    <h4>이메일로 {ChageLogin}</h4>
                    <form>
                        {
                            ChageLogin === '로그인'
                            ?(
                                <>
                                <div className="input__box1">
                                    <input type="email" placeholder="이메일을 입력하세요" className="input__" onChange={(e)=>{
                                        setLoginEmail(e.target.value)
                                        console.log(e.target)
                                    }}></input>
                                </div>
                                <div className="input__box1">
                                    <input type="password" placeholder="비밀번호를 입력하세요" className="input__" onChange={(e)=>{
                                        setLoginPassword(e.target.value)
                                    }}></input>
                                </div>
                                <div className="input__box1">   
                                    <button className="loginBtn" onClick={()=>{
                                      
                                    }}>{ChageLogin}</button>
                                </div>     
                                </>
                            )
                            :(
                                <>
                                <div className="input__box">
                                    <input type="email" placeholder="이름을 입력하세요" className="input__" onChange={(e)=>{
                                        setJoinName(e.target.value)
                                    }}></input>
                                </div>
                                <div className="input__box">
                                    <input type="email" placeholder="이메일을 입력하세요" className="input__" onChange={(e)=>{
                                        setJoinEmail(e.target.value)
                                    }}></input>
                                </div>
                                <div className="input__box">
                                    <input type="password" placeholder="비밀번호를 입력하세요" className="input__" onChange={(e)=>{
                                        setJoinPassword(e.target.value)
                                    }}></input>
                                </div>
                                <div className="input__box">   
                                    <button className="loginBtn" onClick={()=>{
                                      
                                    }}>{ChageLogin}</button>
                                </div>    
                                </>
                            )
                        }
                    </form>
                  </section>
                  <section className="section2">
                        <h4>소셜 계정으로 {ChageLogin}</h4>
                    <div className="icon__box">
                        <a href="/" className="google__icon">
                            <Link to="/google">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path fill="#4285F4" d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z"></path>
                                <path fill="#34A853" d="M10.2 19.931c2.753 0 5.064-.886 6.753-2.414l-3.218-2.436c-.862.587-2.017.997-3.536.997a6.126 6.126 0 0 1-5.801-4.141l-.12.01-3.148 2.38-.041.112c1.677 3.256 5.122 5.492 9.11 5.492z"></path>
                                <path fill="#FBBC05" d="M4.398 11.937a6.008 6.008 0 0 1-.34-1.971c0-.687.125-1.351.329-1.971l-.006-.132-3.188-2.42-.104.05A9.79 9.79 0 0 0 .001 9.965a9.79 9.79 0 0 0 1.088 4.473l3.309-2.502z"></path>
                                <path fill="#EB4335" d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.878-2.746C15.253.985 12.953 0 10.199 0 6.211 0 2.766 2.237 1.09 5.492l3.297 2.503A6.152 6.152 0 0 1 10.2 3.853z"></path>
                            </svg>
                            </Link>
                            </a>
                        <a href="/" className="facebook__icon"><Link to="/facebook">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <mask id="facebook" width="12" height="20" x="4" y="0" maskUnits="userSpaceOnUse">
                                <path fill="#fff" fill-rule="evenodd" d="M7.84 20v-8.945H4.844V7.5H7.84V4.7C7.84 1.655 9.7 0 12.414 0c1.3 0 2.418.098 2.742.14v3.18h-1.883c-1.476 0-1.761.703-1.761 1.73V7.5h3.332l-.457 3.555h-2.875V20" clip-rule="evenodd"></path></mask>
                                <g mask="url(#facebook)">
                                <path fill="#fff" d="M0 0h20v20H0z"></path></g>
                            </svg></Link></a>
                        <a href="/" className="kakao__icon"><Link to="/kakao">
                            <svg width="40" height="40" viewBox="0 0 256 256">
                                <path fill="#FFE812" d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"/>
                                <path d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"/>
                                <path fill="#FFE812" d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"/>
                            </svg></Link></a>
                    </div>
                  </section>
                </div>
                <div className="foot">
                  
                  {
                      ChageLogin === '로그인'
                      ?(
                        <>
                            <span>아직 회원이 아니신가요?</span>
                            <div class="link" tabindex="7" data-testid="switchmode" onClick={()=>{setChangeLogin('회원가입')}}>회원가입</div>
                        </>
                      )
                      :(
                        <>
                            <span>이미 회원이신가요?</span>
                            <div class="link" tabindex="7" data-testid="switchmode" onClick={()=>{setChangeLogin('로그인')}}>로그인</div>
                        </>
                      )
                  }
                  
                </div>
              </div>
            </div>
          </div>
        
            <Route exact path="/google" 
            // component={
            // <GoogleLogin
            // clientId="161501678517-il8gdqt5ak46nuh9r2oku23aeebg5f53.apps.googleusercontent.com"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            // cookiePolicy={'single_host_origin'}/>}
            ></Route>

            <Route exact path="/facebook">

            </Route>

            <Route exact path="/kakao">

            </Route>
        </div>
      </>
    )
  }
  export default Modal;