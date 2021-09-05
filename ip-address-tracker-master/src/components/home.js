import React, { Component } from "react";
import Post from "./Post";
import { getPost } from "../services/index";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    console.log(this.props.posts);
  }

  fetchPost = async () => {
    const { data } = await getPost();
    this.setState({ posts: data });
  };

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    return (
      <main>
        <div className="container">
          <ul className="posts">
            {this.state.posts.length >= 1 &&
              this.state.posts.map((post) => <Post post={post} />)}
          </ul>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
