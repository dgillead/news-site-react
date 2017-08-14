import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    let article = News[this.props.match.params.articleID];
    return (
      <div>
        <Article title={article.title} created_date={article.created_date} byline={article.byline} image={article.multimedia[0].url} abstract={article.abstract} />
      </div>
    );
  }
}

export default ArticlePage;
