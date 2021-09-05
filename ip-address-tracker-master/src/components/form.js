import React, { Component, createRef } from "react";
import { postData } from "../services";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: createRef(),
      body: createRef(),
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title: this.state.title.current.value,
      body: this.state.body.current.value,
      userId: 1,
    }).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input">
              <input type="text" placeholder="title" ref={this.state.title} />
            </div>
            <div className="input">
              <textarea type="text" placeholder="body" ref={this.state.body} />
            </div>
            <div className="input">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
