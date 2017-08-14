import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.created_date}</p>
        <h2>{this.props.byline}</h2>
        <img src={this.props.image} />
        <p>{this.props.abstract}</p>
      </div>
    )
  }
}

export default Article;
