import React, { Component } from 'react';

import './PostList.css';

import Api from '../api';
import Post from './Post';

class PostList extends Component {

  state = {

    posts: [],

  }

  componentDidMount() {
    this.setState({ posts: Api.fetchPosts() });
  }

  render() {
    return (
      <div id="post-list">
        { this.state.posts.map(post => <Post key={post.id} data={post} />) }
      </div>
    )
  }

}

export default PostList;
