import React, {useState} from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Dashboard from './components/Dashboard';
import Content01 from './components/Content01'

function App() {
  let [modal, setModal] = useState(false);
  let [LoginState,setLoginState] = useState(false)

  const [user, setUser] = useState();
  const logout = () => setUser(undefined);

  return (
    <div className="App">
      {/* Header */}
      <Route exact path="/">
        <div className="global-nav">
          <div className="global-nav-links">
                  <a href="/" className="product-name"><Link to="/">MoDera</Link></a>
                  <a href="/" className="global-nav-links-btn-a">
                  <Link to="/serch"><svg width="17" height="18" viewBox="0 0 17 17">
                  <path fill-rule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clip-rule="evenodd"></path>
                  </svg></Link> 
                  </a>
                  <button color="darkGray" className="global-nav-links-btn-b"><Link to="/write">새 글 작성</Link></button>
                  {
                    LoginState === false
                    ? <button onClick={ ()=>{ setModal(true) } } className="global-nav-links-btn-c">로그인</button>
                    : <button onClick={ ()=>{ 
                      logout();
                      setLoginState(false) } } className="global-nav-links-btn-c">로그아웃</button>
                  }
            </div>
          </div>
        {/* ! Header */}

        <div className="nav__content">
          <ul>
            <a href="/">
              <li><h3>🕵🏼‍♀️취업정보</h3></li>
            </a>
            <a href="/">
              <li><h3>✍🏼Q & A</h3></li>
            </a>
            <a href="/">
              <li><h3>👩‍👩‍👧‍👧오프라인 수업정보</h3></li>
            </a>
          </ul>
        </div>
          
        {
          modal === true 
          ? <Modal modal={modal} setModal={setModal} user={user} setUser={setUser} setLoginState={setLoginState}
          ></Modal>
          : <Content01/>
        }
      </Route>

      <Route exact path="/serch">
      </Route>

      <Route exact path="/write">
        <Dashboard></Dashboard>
      </Route>
    </div>
  );
}
export default App;