import { useState } from "react";
import { useHistory } from 'react-router';

function UseForm(){
  const history = useHistory();

  /* input의 value값을 전달받기위한 State와 함수들*/
  let [username, setUsername] = useState()
  let [userpassword, setUserPassword] = useState()
    const handleNameChange = (e) => {
      setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setUserPassword(e.target.value)
    }
    const userData = {username : username, password : userpassword};
    /* input의 value값을 전달받기위한 State와 함수들*/


    /* 전달받은 value값을 django에 보내기위한 함수들*/
    const LoginURL = 'http://localhost:8000/login/';
    const JoinURL = 'http://localhost:8000/user/';
    const POSTMethod = {  
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }

    const LoginFetch = () => {
      fetch(LoginURL, POSTMethod)
      .then(res => res.json())
      .then(json => {
        if (json.user && json.user.username && json.token) {
          userHasAuthenticated(true, json.user.username, json.token);
          setModal(true)
          history.push('/')
          console.log("why?")
        }else{
          alert("아이디 또는 비밀번호를 확인해주세요.")
        }
      })
      .catch(error => alert(error));
    }

    const JoinFetch = () => {
      fetch(JoinURL, POSTMethod)
      .then(res => res.json())
      .then(json => {
        if (json.username && json.token) {
          userHasAuthenticated(true, json.username, json.token);
          setModal(true)
          history.push('/')
        }else{
          alert("사용불가능한 아이디입니다.")
        }
      })
      .catch(error => alert(error));
    }

    const LoginSubmit = (e) => {
      e.preventDefault()
      LoginFetch()
    }
    
    const joinSubmit = (e) =>{
      e.preventDefault()
      JoinFetch()
    }
    /* 전달받은 value값을 django에 보내기위한 함수들*/


    /* django에서 받을 res값을 저장하는 함수들*/
    let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)
    const [user, setUser] = useState([])

    const userHasAuthenticated = (authenticated, username, token) => { 
      setisAuthenticated(authenticated)
      setUser(username)
      localStorage.setItem('token', token);
      
    }
    /* django에서 받을 res값을 저장하는 함수들*/


    /*로그아웃*/
    const handleLogout = () => {
      setisAuthenticated(false)
      setUser("")
      setModal(false)
      localStorage.removeItem('token');
    }
    /*로그아웃*/

    /*로그인 성공시 바꿔 줄 state값 */
    const [modal, setModal] = useState(false);
    /*로그인 성공시 바꿔 줄 state값 */

    return {
      handleNameChange,
      handlePasswordChange,
      LoginSubmit,
      joinSubmit,
      isAuthenticated,
      setisAuthenticated,
      user,
      setUser,
      userHasAuthenticated,
      handleLogout,
      history,
      modal,
      setModal,
    }
}

export default UseForm;