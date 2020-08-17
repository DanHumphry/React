import React, { useState } from 'react';
import Navigator from './components/Navigator';
import Banner from './components/Banner';
import './css/Navigator.css';
import './css/Wrapper.css';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Calendar from 'react-calendar';
import ko from 'date-fns/locale/ko';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ko', ko)

function App() {
  let [Boolean, ChangeBoolean] = useState(false);
  let [SuccessLogin, ChangeSuccessLogin] = useState(false);
  let [UserId, ChangeUserId] = useState(['hyeon4137','nokla4137']);
  let [UserPassword, ChangeUserPassword] = useState(['1234','4567'])
  let [LoginInput, ChangeLoginInput] = useState();
  let [LoginInput2, ChangeLoginInput2] = useState();
  const [startDate, setStartDate] = useState(new Date());

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
      <Calendar></Calendar>
      <br/><br/>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale='ko'
      ></DatePicker>
      <br/><br/>
      <Content1></Content1>
      <Content2></Content2>
    </>
  );
}
export default App;