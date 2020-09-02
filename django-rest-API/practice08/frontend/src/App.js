import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';

function App() {

  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [joinID, setJoinID] = useState("")
  const [joinPassword, setJoinPassword] = useState("")

  const data = {username : joinID, password : joinPassword}
  const data2 = {username : ID, password : password}

  let [userDAO,setUserDAO] = useState();
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token' ? true : false))

  const userHasAuthenticated = (authenticated, username, token) => {
    setUserDAO(username)
    setIsAuthenticated(authenticated)
    localStorage.setItem('token', token);
  }

  const responseGoogle = (res)=>{
    console.log(res)
    let email = res.profileObj.email
    let id_token = res.profileObj.googleId

    let data = {
      username : email,
      password : id_token,
      provider : 'google'
    }

    fetch('http://localhost:8000/api/auth/register/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(json => {
      if (json.username && json.token) {
        userHasAuthenticated(true, json.username, json.token);
      }else{
        
        fetch('http://localhost:8000/api/auth/login/', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json => {
          // 발급 완료 되었다면 해당 토큰을 클라이언트 Local Storage에 저장
          if (json.user && json.user.username && json.token) {
            userHasAuthenticated(true, json.user.username, json.token);
          }
        })
        .catch(error => console.error('Error:', error));
      }
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <div className="App">
      <input type="text" placeholder="아이디를 입력하세요" onChange={(e)=>{
        setID(e.target.value)
      }}/>
      <input type="password" placeholder="비밀번호를 입력하세요" onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <button className="JoinLoign-button" onClick={(e)=>{
        e.preventDefault()
        fetch('http://localhost:8000/api/auth/login/', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data2)
        }).then(res => res.json())
        .then(json => {
          // 발급 완료 되었다면 해당 토큰을 클라이언트 Local Storage에 저장
          if (json.user && json.user.username && json.token) {
            userHasAuthenticated(true, json.user.username, json.token);
          }
        })
        .catch(error => console.error('Error:', error));
      }}>로그인</button>

      <input type="text" placeholder="아이디를 입력하세요" onChange={(e)=>{
        setJoinID(e.target.value)
      }}/>
      <input type="password" placeholder="비밀번호를 입력하세요" onChange={(e)=>{
        setJoinPassword(e.target.value)
      }}/>
      <button className="JoinLoign-button" onClick={()=>{
        fetch('http://localhost:8000/api/auth/register/', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json => {
          if (json.username && json.token) {
            userHasAuthenticated(true, json.username, json.token);
          }
        })
        .catch(error => console.error('Error:', error));
      }}>회원가입</button>

        <GoogleLogin
        buttonText="google"
        clientId="161501678517-il8gdqt5ak46nuh9r2oku23aeebg5f53.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>

    </div>
  );
}

export default App;
