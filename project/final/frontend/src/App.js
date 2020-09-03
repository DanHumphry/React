import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Navi from './components/Navi'
import Board from './components/Board';
import Profile from './components/Profile';
import LoginModal from './components/LoginModal';
import { Route } from 'react-router-dom';
import './App.css'

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState()
  let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)

  const userHasAuthenticated = (authenticated, username, token) => { //회원가입이나 로그인이 성공했을 때 토큰을 저장
    setisAuthenticated(authenticated)
    setUser(username)
    localStorage.setItem('token', token);
  }

  useEffect(()=>{
    if(isAuthenticated){
      setModal(true)
    }
    else{
      setModal(false)
    }
  },[user,isAuthenticated])
  
  const handleLogout = () => {
    //로그아웃
      setisAuthenticated(false)
      setUser("")
      localStorage.removeItem('token');
      setModal(false)
  }

  useEffect(() => {
    // 토큰(access token)이 이미 존재하는 상황이라면 서버에 GET /validate 요청하여 해당 access token이 유효한지 확인
    if (isAuthenticated) {
      // 현재 JWT 토큰 값이 타당한지 GET /validate 요청을 통해 확인하고
      // 상태 코드가 200이라면 현재 GET /user/current 요청을 통해 user정보를 받아옴
      fetch('http://localhost:8000/validate/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        fetch('http://localhost:8000/user/current/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(json => {
          // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
          if (json.username) {
            setUser({ username: json.username });
          }
          // Refresh Token 발급 받아 token의 만료 시간 연장
          fetch('http://localhost:8000/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: localStorage.getItem('token')
            })
          })
          .then(res => res.json())
          .then((json)=>{
            userHasAuthenticated(true, json.user.username, json.token);
          })
          .catch(error => {
            console.log(error);
          });;
        })
        .catch(error => {
          handleLogout();
        });
      })
      .catch(error => {
        handleLogout();
      });
    }
  },[isAuthenticated])

  return (
    <div className="App">
      <div className="auto-margin">

        <Route exact path="/">
          <Header modal={modal} handleLogout={handleLogout}/>
        </Route>

        <Route exact path="/login">
          <LoginModal setModal={setModal} userHasAuthenticated={userHasAuthenticated}/>
        </Route>

        <Route exact path="/">
          <Navi/>
        </Route>

      <Route exact path="/board">
        <Board/>
      </Route>

      <Route exact path="/profile">
        <Header modal={modal} handleLogout={handleLogout}/>
        <Profile/>
      </Route>
      </div>
    </div>
  );
}

export default App;
