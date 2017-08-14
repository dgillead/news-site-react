import React, { Component } from 'react';
import ArticleTeaser from '../../components/ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  render() {
    return (
      <div>
        { this.props.articles.map((article, index) => { return <ArticleTeaser handleTitleClick={() => this.props.handleTitleClick(index)} key={article.title} title={article.title} createdDate={article.createdDate} /> }) }
      </div>
    );
  }
}

export default ArticleList;
