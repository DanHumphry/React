import React, { Component } from 'react';
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Generic from "./Component/Generic";
import Elements from "./Component/Elements";
import './assets/css/Main.css';
import HomeContents from './Component/HomeContents';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode:'home',
      contents : [
        {id:1, content:<Generic></Generic>},
        {id:2, content:<Elements></Elements>}
      ]
    }
  }

  getContent(){
    if(this.state.mode === 'home'){
      return <HomeContents></HomeContents>;
    }
    else if(this.state.mode === 'generic'){
      return <Generic></Generic>;
    }
  }

  render(){
    return(
      <div>
      <Header
        onChangePage={function(){
          this.setState({
            mode:'generic'
          })
        }.bind(this)}
      ></Header>
      <Banner></Banner>
      <div>
      {this.getContent()}
      </div>
      <Footer></Footer>
      </div> 
    );
  }
}

export default App;