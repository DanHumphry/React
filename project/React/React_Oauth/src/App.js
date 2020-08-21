import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

function App() {

  const[name, setName] = useState("");

  const[email, setEmail] = useState("");

  const[url, setUrl] = useState("");

  const responseGoogle = response => {
    console.log(response)
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  return (
    <div>
      <h1>Login with Google</h1>
      <h2>welcome : {name}</h2>
      <h2>email : {email}</h2>
      <img src={url} alt={name}/>
      <GoogleLogin
      clientId="161501678517-il8gdqt5ak46nuh9r2oku23aeebg5f53.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
