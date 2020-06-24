import React from 'react';
import $ from 'jquery';
import ListedReviews from './content.jsx';
import RatingSnapshot from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      view: 'pageOne'
    };
    this.changeView = this.changeView.bind(this);
  }
  
  changeView(option) {
    this.setState({
      view: option
    });
  }

  componentDidMount() {
    serverCommunicator.getReviews()
      .done(data => {
        this.setState({
          allReviews: data
        });
      });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'pageOne') {
      return (
        <div>
          1-20 of {this.state.allReviews.length} Reviews
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
          )}
        </div>
      );
    } else if (view === 'pageTwo') {
      return (
        <div>
          21-40 of {this.state.allReviews.length} Reviews
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
          )}
        </div>
      );
    } else if (view === 'pageThree') {
      return (
        <div>
          41-60 of {this.state.allReviews.length} Reviews
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
          )}
        </div>
      );
    } else if (view === 'pageFour') {
      return (
        <div>
          61-80 of {this.state.allReviews.length} Reviews
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
          )}
        </div>
      );
    } else if (view === 'pageFive') {
      return (
        <div>
          81-100 of {this.state.allReviews.length} Reviews
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
          )}
        </div>
      );
    }
  }

  render() {
    return (   
      <div>

        <div className='header'>
        </div>

        <div className='listedReviews'>
          {this.renderView()}
        </div>

        <div className='pageswitching'>

          <button className={this.state.view === 'pageOne'}
            onClick={() => this.changeView('pageOne')}>
              1
          </button>

          <button className={this.state.view === 'pageTwo'}
            onClick={() => this.changeView('pageTwo')}>
              2
          </button>

          <button className={this.state.view === 'pageThree'}
            onClick={() => this.changeView('pageThree')}>
              3
          </button>

          <button className={this.state.view === 'pageFour'}
            onClick={() => this.changeView('pageFour')}>
              4
          </button>

          <button className={this.state.view === 'pageFive'}
            onClick={() => this.changeView('pageFive')}>
              5
          </button>

        </div>
      </div>
    );
  }
}

var serverCommunicator = {
  getReviews: () => {
    console.log('getReviews was invoked...');
    return $.ajax({
      url: 'http://localhost:3006/api/reviews',
      method: 'GET',
      success: (data) => {
        console.log('We got the reviews', data);
        
        return data;
      },
      error: (err) => {
        console.log('Failed to GET from server', err);
      }
    });
  }
};

export default App;

