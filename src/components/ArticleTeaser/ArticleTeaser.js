import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    return (
      <div>
        <a href="#" onClick={(event) =>
          { event.preventDefault();
          this.props.handleTitleClick(this.props.id)} }>
          {this.props.title}</a>
        <p>{this.props.createdDate}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
