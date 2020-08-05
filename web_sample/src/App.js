import React, { Component } from 'react';
import Navi from "./component/Navi";
import ReadContent from "./component/ReadContent";
import Subject from "./component/Subject"
import Control from './component/Control';
import CreateContent from './component/CreateContent'
import UpdateContent from './component/UpdateContent'
import './css/Navi.css';

class App extends Component{
  constructor(props){
    super(props);
    this.Max_content_id = 5;
    this.state = {
      mode:'welcome',
      welcome:{title:'STICKY REACT NAV',
      sub:<Control onChangeMode={function(_mode){
        if(_mode === 'create' || _mode === 'update'){
          this.setState({
            mode:_mode
          });
        }
      }.bind(this)}></Control>},
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
      _article = <ReadContent title={_title} sub={_sub}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} sub={_content.sub}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _sub){
        this.Max_content_id = this.Max_content_id + 1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.Max_content_id, title:_title, sub:_sub});
        this.setState({
          contents:_contents,
          mode:'read',
          select_content_id:this.Max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} 
        onSubmit={function(_id, _title, _sub){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, sub:_sub};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    return(
      <div className="App">
        <Subject
          title={this.state.welcome.title}
          sub={this.state.welcome.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
      <Navi
        onChangePage={function(id){
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
