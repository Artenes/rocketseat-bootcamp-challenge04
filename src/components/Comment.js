import React, { Component } from 'react';

import './Comment.css';

class Comment extends Component {

  render() {
    return (
      <div className="container">
        <img src={ this.props.data.author.avatar } alt={ this.props.data.author.name }/>
        <div className="comment">
          <p className="name">{ this.props.data.author.name }</p>
          <p className="content">{ this.props.data.content }</p>
        </div>
      </div>
    );
  }

}

export default Comment;