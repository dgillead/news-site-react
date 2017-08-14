import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Article extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbo-content">{this.props.title}</h1>
          <p className="jumbo-content">{this.props.created_date}</p>
          <h2 className="jumbo-content">{this.props.byline}</h2>
          <img className="jumbo-content" src={this.props.image} alt="current article"/>
          <p className="jumbo-content">{this.props.abstract}</p>
        </Jumbotron>
      </div>
    )
  }
}

export default Article;
