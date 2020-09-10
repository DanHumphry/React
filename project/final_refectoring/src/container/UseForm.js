import { useState } from "react"
import { useHistory } from 'react-router'

function UseForm({ initialValues }){
    const history = useHistory()
    const [values, setValues] = useState(initialValues)
    let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)

    const handleChange = (e) => {
        const {name , value} = e.target
        setValues({...value, [name]:value})
        // console.log({...values})
        // console.log({[name]:value})
        // console.log(values)
    }

    let data = { username: values.username, password: values.password };
    const userHasAuthenticated = (authenticated, username, token) => { 
        setisAuthenticated(authenticated)
        localStorage.setItem('token', token);
    }//회원가입이나 로그인이 성공했을 때 토큰을 저장
    
    const handleLogin = (e) =>{
        e.preventDefault()
        fetch('http://localhost:8000/login/', {  
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
          // user data와 token정보가 일치하면 로그인 성공
          if (json.user && json.user.username && json.token) {
            userHasAuthenticated(true, json.user.username, json.token);
            history.push("/");
          }else{
            alert("아이디 또는 비밀번호를 확인해주세요.")
          }
        })
        .catch(error => alert(error));
    }

    return {
        values,
        handleChange,
        handleLogin,
    }
}

export default UseForm;