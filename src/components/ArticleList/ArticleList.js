import React, { Component } from 'react';
import ArticleTeaser from '../../components/ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ArticleList extends Component {
  render() {
    return (
      <div>
        <ListGroup className="center-block text-center" id="articles">
          { this.props.articles.map((article, index) => { return <ListGroupItem key={article.title}><ArticleTeaser handleTitleClick={() => this.props.handleTitleClick(index)} title={article.title} createdDate={article.createdDate} /></ListGroupItem> }) }
        </ListGroup>
      </div>
    );
  }
}

export default ArticleList;
