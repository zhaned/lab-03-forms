import React, { Component } from 'react';
import Search from '../components/Articles/Search';
import ArticleList from '../components/Articles/ArticleList';
import { fetchArticles, fetchArticleByValue } from '../services/newsApi';

export default class NewsArticle extends Component {
  state = {
    loading: true,
    articles: [],
    value: '', // this is what the user is searching with
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      loading: false,
      articles,
    });
  }

  handleValueChange = (input) => {
    this.setState({ value: input.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticleByValue(this.state.value);
    this.setState({
      loading: false,
      articles,
    });
  };

  render() {
    const { loading, articles, value } = this.state;

    if (loading) return <h2>Hold up, I'm getting it.</h2>;

    return (
      <div>
        <Search
          value={value}
          onValueChange={this.handleValueChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
