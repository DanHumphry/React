import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseKaKao = res => {
    setName(res.profile.properties.nickname)
    setUrl(res.profile.properties.profile_image)
    console.log(res.profile)
  }

  const responseGoogle = res => {
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
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
      // onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
      <KaKaoLogin
      jsKey={'b7c4131f590196416865ba9a8bb2b390'}
      buttonText="KaKao"
      onSuccess={responseKaKao}
      getProfile={true}
      />
    </div>
  );
}

export default App;
