import React, { Component } from 'react';
import './Post.css';

import Comment from './Comment';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="header">
          <img src={ this.props.data.author.avatar } alt={ this.props.data.author.name }/>
          <div>
            <p>{ this.props.data.author.name }</p> 
            <small>{ this.props.data.date }</small> 
          </div>
        </div>
        <div className="body">{ this.props.data.content }</div>
        <div className="divider"></div>
        <div className="comments">
          { this.props.data.comments.map(comment => <Comment id={comment.id} data={comment} />) }
        </div>
      </div>
    );
  }

}

export default Post;