import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ListedReviews from './content.jsx';
import RatingSnapshot from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      shownReviews: []
    };
  }

  componentDidMount() {
    serverCommunicator.getReviews()
      .done(data => {
        this.setState({
          allReviews: data
        });
      });
  }

  render() {
    return (   
      <div>
        <div>
          {this.state.allReviews.map((review) => 
            <RatingSnapshot key={review.id} review={review} />
          )}
        </div>
        <div>
          {this.state.allReviews.map((review) => 
            <ListedReviews key={review.id} review={review} />
          )}
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
        console.log('Failed to GET from server', err)
      }
    });
  }
};

export default App;

