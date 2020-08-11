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
      select_content_id:1,
      contents : [
<<<<<<< HEAD
        {id:1, title:'HOME', content:<HomeContents></HomeContents>},
        {id:2, title:'Generic', content:<Generic></Generic>},
        {id:3, title:'Elements', content:<Elements></Elements>}
=======
        {id:1, content:<Generic></Generic>},
        {id:2, content:<Elements></Elements>}
>>>>>>> 112af3a7b2fdff6bddaf44b52af185deb4a95a1e
      ]
    } 
  }

  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.select_content_id) {
          return data;
        }
        i = i + 1;
      }
  }

  getContent(){
    var _article, _content = null;
    if(this.state.select_content_id === Number(1)){
      _content = this.getReadContent();
      _article = _content.content
    }else if(this.state.select_content_id === Number(2)){
      _content = this.getReadContent();
      _article = _content.content
    }else if(this.state.select_content_id === Number(3)){
      _content = this.getReadContent();
      _article = _content.content
    }

    return _article;
  }

  render(){
    return(
      <div>
      <Header
        onChangePage={function(id){
          this.setState({
            select_content_id : Number(id)
          })
        }.bind(this)}
        data={this.state.contents}
      ></Header>
      <Banner></Banner>
      {this.getContent()}
      <Footer></Footer>
      </div> 
    );
  }
}
export default App;