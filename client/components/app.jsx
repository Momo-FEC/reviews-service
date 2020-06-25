import React from 'react';
import $ from 'jquery';
import ListedReviews from './content.jsx';
import { FaStar } from 'react-icons/fa';


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
  
    var count = {
      total: 0,
      fiveStar: 0,  
      fourStar: 0,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      totalNumber: 0,
      totalAvg: 0,
      features: 0,  
      performance: 0,
      design: 0,
      value: 0,
    };


    var counter = () => {
      this.state.allReviews.forEach((review) => {
        if (review.overall === 5) {
          count.total += 1;
          count.fiveStar += 1;
          count.totalNumber += 5;
          count.features += review.feature;
          count.performance += review.performance;
          count.design += review.design;
          count.value += review.value;
        } else if (review.overall === 4) {
          count.total += 1;
          count.fourStar += 1;
          count.totalNumber += 4;
          count.features += review.feature;
          count.performance += review.performance;
          count.design += review.design;
          count.value += review.value;
        } else if (review.overall === 3) {
          count.total += 1;
          count.threeStar += 1;
          count.totalNumber += 3;
          count.features += review.feature;
          count.performance += review.performance;
          count.design += review.design;
          count.value += review.value;
        } else if (review.overall === 2) {
          count.total += 1;
          count.twoStar += 1;
          count.totalNumber += 2;
          count.features += review.feature;
          count.performance += review.performance;
          count.design += review.design;
          count.value += review.value;
        } else if (review.overall === 1) {
          count.total += 1;
          count.oneStar += 1;
          count.totalNumber += 1;
          count.features += review.feature;
          count.performance += review.performance;
          count.design += review.design;
          count.value += review.value;
        }
      }
      );
      count.totalAvg = count.totalNumber / this.state.allReviews.length;
      count.features = count.features / this.state.allReviews.length;
      count.performance = count.performance / this.state.allReviews.length;  
      count.design = count.design / this.state.allReviews.length;  
      count.value = count.value / this.state.allReviews.length;    
    };

    counter();

    var stars = <FaStar size={10} color={'#000000'}/>;

    return (   
      <div>

        <div className='RatingSnapshot'>
          5{stars}{count.fiveStar}
          <div></div>
          4{stars}{count.fourStar}
          <div></div>
          3{stars}{count.threeStar}
          <div></div>
          2{stars}{count.twoStar}
          <div></div>
          1{stars}{count.oneStar}
        </div>

        <div className='AvgCustomerRatings'>
          <ul>
            <ul>Overall Average: {count.totalAvg}</ul>
            <ul>Features Average: {count.features}</ul>
            <ul>Perfomance Average: {count.performance}</ul>
            <ul>Design Average: {count.design}</ul>
            <ul>Value Average: {count.value}</ul>
          </ul>
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

