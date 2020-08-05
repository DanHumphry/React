import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return (
        <article>
          <section className="et-slide">
            <h1>Create</h1>
            <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.sub.value
                );
              }.bind(this)}
            >
              <p><input className="input-taps" type="text" name="title" placeholder="Title"></input></p>
              <p>
                <textarea className="textarea-taps" name="sub" placeholder="Description"></textarea>
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

  export default CreateContent;