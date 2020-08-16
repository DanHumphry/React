import React, { useState } from 'react';
import Navigator from './components/Navigator';
import Banner from './components/Banner';
import './css/Navigator.css';

function App() {
  let [Boolean, ChangeBoolean] = useState(false);
  let [SuccessLogin, ChangeSuccessLogin] = useState(false);
  let [UserId, ChangeUserId] = useState(['hyeon4137','nokla4137']);
  let [UserPassword, ChangeUserPassword] = useState(['1234','4567'])
  let [LoginInput, ChangeLoginInput] = useState();
  let [LoginInput2, ChangeLoginInput2] = useState();

  function PlusUserDAO(){
    let ID = [...UserId]
    let PS = [...UserPassword]
    ID.unshift(LoginInput)
    PS.unshift(LoginInput2)
    ChangeUserId(ID)
    ChangeUserPassword(PS)
  }

  function HiddenNav(){
    let F = Boolean;
    F === false ? F = true : F = false
    ChangeBoolean(F)
  }

  function HiddenLogin(){
    let F = SuccessLogin;
    F === false ? F = true : F = false
    ChangeSuccessLogin(F)
  }

  return (
    <>
      <Navigator Boolean={Boolean} ChangeBoolean={ChangeBoolean} PlusUserDAO={PlusUserDAO}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput} LoginInput2={LoginInput2} ChangeLoginInput2={ChangeLoginInput2}
      UserId={UserId} ChangeUserId={ChangeUserId} UserPassword={UserPassword} ChangeUserPassword={ChangeUserPassword}
      HiddenLogin={HiddenLogin} SuccessLogin={SuccessLogin} ChangeSuccessLogin={ChangeSuccessLogin}
      ></Navigator>
      <Banner Boolean={Boolean} ChangeBoolean={ChangeBoolean} HiddenNav={HiddenNav}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput} LoginInput2={LoginInput2} ChangeLoginInput2={ChangeLoginInput2}
      UserId={UserId} ChangeUserId={ChangeUserId} UserPassword={UserPassword} ChangeUserPassword={ChangeUserPassword}
      SuccessLogin={SuccessLogin} ChangeSuccessLogin={ChangeSuccessLogin}
      ></Banner>
    </>
  );
}

export default App;
