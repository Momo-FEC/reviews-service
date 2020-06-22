import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: []
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
        Hello World!
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
        console.log('we got the reviews', data);
        return data;
      },
      error: (err) => {
        console.log('failed to GET from server', err)
      }
    });
  }
};

export default App;

