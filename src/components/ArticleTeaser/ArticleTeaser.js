import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <a href="#" onClick={() => this.props.handleTitleClick(this.props.id)}>{this.props.title}</a>
        <p>{this.props.createdDate}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
