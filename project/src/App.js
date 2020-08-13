import React, { useState } from 'react';
import Navigator from './components/Navigator';
import Banner from './components/Banner';
import './css/Navigator.css';

function App() {
  let [Boolean, ChangeBoolean] = useState(false);
  let [UserId, ChangeUserId] = useState(['hyeon4137','nokla4137']);
  let [UserPassword, ChangeUserPassword] = useState(['1234','4567'])
  let [LoginInput, ChangeLoginInput] = useState();
  let [LoginInput2, ChangeLoginInput2] = useState();

  return (
    <>
      <Navigator Boolean={Boolean} ChangeBoolean={ChangeBoolean}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput} LoginInput2={LoginInput2} ChangeLoginInput2={ChangeLoginInput2}
      UserId={UserId} ChangeUserId={ChangeUserId} UserPassword={UserPassword} ChangeUserPassword={ChangeUserPassword} ></Navigator>
      <Banner Boolean={Boolean} ChangeBoolean={ChangeBoolean}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput} LoginInput2={LoginInput2} ChangeLoginInput2={ChangeLoginInput2}
      UserId={UserId} ChangeUserId={ChangeUserId} UserPassword={UserPassword} ChangeUserPassword={ChangeUserPassword}></Banner>
    </>
  );
}

export default App;
