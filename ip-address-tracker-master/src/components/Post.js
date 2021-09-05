import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <p>{this.props.post.title}</p>
        <blockquote>{this.props.post.body}</blockquote>
      </li>
    );
  }
}
