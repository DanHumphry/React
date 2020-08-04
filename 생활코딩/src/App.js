import React, { Component } from 'react';
import TOC from "./component/TOC";
import Content from './component/Content';
// import Subject from './component/Subject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'Web', sub:'World Wide Web!'},
      welcome:{title:'welcome', desc:'Hello, React !!'},
      contents :[
        {id:1, title:'HTML', desc:'HTML is for informatrion'},
        {id:2, title:'CSS', desc:'CSS is design.'},
        {id:3, title:'JS', desc:'JS is for interactive'}
      ]
    }
  }
  //render란 어떤 html을 그릴것인가 ?
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title}
        sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // preventDefault란 render함수가 refresh되는 이벤트들을 막는것
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
