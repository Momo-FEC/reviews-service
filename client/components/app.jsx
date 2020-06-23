import React from 'react';
import ReactDOM from 'react-dom';
import $, { data } from 'jquery';
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
          Page 1
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view} />
          )}
        </div>
      );
    } else if (view === 'pageTwo') {
      return (
        <div>
          Page 2
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view}/>
          )}
        </div>
      );
    } else if (view === 'pageThree') {
      return (
        <div>
          Page 3
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view}/>
          )}
        </div>
      );
    } else if (view === 'pageFour') {
      return (
        <div>
          Page 4
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view}/>
          )}
        </div>
      );
    } else if (view === 'pageFive') {
      return (
        <div>
          Page 5
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} view={this.state.view}/>
          )}
        </div>
      );
    }
  }

  render() {
    return (   
      <div>
        <div className='main'>
          {this.renderView()}
        </div>

        <div className='nav'>

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

