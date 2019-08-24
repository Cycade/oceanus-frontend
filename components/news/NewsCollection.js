import react, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import NewsCard from './NewsCard.js';
import LoadingSpinner from '../LoadingSpinner.js';

export default class NewsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      tags: [],
      selectedTag: []
    };
  }

  _onTagSelected(tag) {
    this.setState({selectedTag: [tag]});
  }

  componentWillMount() {
    fetch("https://psmapi.lcquest.com/api/v1/news")
    .then((res) => {
      return res.json();
    }).then((data) => {
      let newsTags = new Set();
      for (let news of data) {
        for (let tag of news['tags']) {
          newsTags.add(tag);
        }
      }
      
      this.setState({news: data, tags: [...newsTags]});
    })
  }

  render() {
    let renderedNews = this.state.news.filter((news) => {
      for (let tag of this.state.selectedTag) {
        if (news['tags'].indexOf(tag) === -1) { return false; }
      }
      return true;
    });

    return (
      <div>
        <div className="container mt-3 p-3">
            <div className="d-flex justify-content-center mt-3 pt-3">
                <p className='display-4'>News about Leadbeater's Possum</p>
            </div>
        </div>

        <div className='container mt-5 pt-3'>
            <div className="card-columns">
                {
                    this.state.news.length === 0
                    ? <LoadingSpinner />
                    : renderedNews.map((e) => {
                        return <NewsCard title={e['title']} desc={e['description']} url={e['url']} tags={e['tags']} selectTag={this._onTagSelected.bind(this)}/>
                    })
                }
            </div>
        </div>
      </div>
    );
  }
}