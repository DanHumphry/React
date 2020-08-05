import React, { Component } from 'react';
import Navi from "./component/Navi";
import ReadContent from "./component/ReadContent";
import './css/Navi.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      welcome:{title:'STICKY SLIDER NAV', sub:'Sliding content with sticky tab nav'},
      select_content_id:1,
      contents : [
        {id:1, title:'ES6', sub:'something about es6'},
        {id:2, title:'Flexbox', sub:'something about flexbox'},
        {id:3, title:'React', sub:'something about react'},
        {id:4, title:'Angular', sub:'something about angular'},
        {id:5, title:'Other', sub:'something about other'}
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
    var _title, _sub, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _sub = this.state.welcome.sub;
      // var _content = this.getReadContent();
      _article = <ReadContent title={_title} sub={_sub}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} sub={_content.sub}></ReadContent>
    }
    return _article;
  }
  render(){
    return(
      <div className="App">
      <Navi
        onChagePage={function(id){
          debugger;
          this.setState({
            mode:'read',
            select_content_id : Number(id)
          });
        }.bind(this)}
        data={this.state.contents}
      ></Navi>
      {this.getContent()}
      </div>
    );
  }

}

export default App;
