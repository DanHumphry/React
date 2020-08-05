import React, { Component } from 'react';


class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      sub:this.props.data.sub
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render(){
    return (
      <article>
        <section className="et-slide">
          <h1>Update</h1>
          <form action="/update_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.sub
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p><input
            className="input-taps"
            type="text"
            name="title" 
            placeholder="Title"
            // value={this.props.data.title}
            value={this.state.title}
            onChange={this.inputFormHandler}
            ></input></p>
            <p>
              <textarea className="textarea-taps" name="sub" placeholder="Description" value={this.state.sub}
              onChange={this.inputFormHandler}
              ></textarea>
            </p>
            <p>
              <input className="submit-taps" type="submit" value="Submit"></input>
            </p>
          </form>
        </section>  
      </article>
    );
  }
}

  export default UpdateContent;