import React, { Component } from 'react';
import News from './data/news.json';
import './App.css';
import Nav from './components/Nav/Nav.js';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

class App extends Component {
  constructor(props) {
    super(props);
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];
    this.state = {
      navItems: [
        {
          label: "HOME",
          value: "home"
        },
        {
          label: "OPINION",
          value: "opinion"
        },
        {
          label: "WORLD",
          value: "world"
        },
        {
          label: "NATIONAL",
          value: "national"
        },
        {
          label: "POLITICS",
          value: "politics"
        },
        {
          label: "UPSHOT",
          value: "upshot"
        },
        {
          label: "NY REGION",
          value: "nyregion"
        },
        {
          label: "BUSINESS",
          value: "business"
        }
      ],
      article: {
        id: randomArticleIndex,
        title: randomArticle.title,
        abstract: randomArticle.abstract,
        byline: randomArticle.byline,
        image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
        created_date: randomArticle.created_date
      }
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar className="text-center">
              <Nav navItems={this.state.navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
            </Navbar>
            <hr />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
