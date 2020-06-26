import React from 'react';
import $ from 'jquery';
import ListedReviews from './content.jsx';
import { FaStar } from 'react-icons/fa';
import { AiOutlineRightSquare } from 'react-icons/ai';
import { AiOutlineLeftSquare } from 'react-icons/ai';
import { AiOutlineLine } from 'react-icons/ai';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      view: 1
    };
    this.changeView = this.changeView.bind(this);
  }
  
  changeView(option) {
    this.setState({
      view: option || 1
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

  renderListOfReviews() {
    const {view} = this.state;

    return (
      <div>
        {(view * 10) - 9}-{view * 10} of {this.state.allReviews.length} Reviews
        {this.state.allReviews.map((review) => 
          <ListedReviews key={review.id} review={review} view={this.state.view} overallRating={review.overall}/>
        )}
      </div>
    );
  }

  render() {

    var stars = <FaStar color={'#fece30'}/>;
    var smallerStars = <FaStar size={10} color={'#000000'}/>;
    var emptystars = <FaStar color={'#cacaca'}/>;

    var backButton = <AiOutlineLeftSquare size={30}/>;
    var nextButton = <AiOutlineRightSquare size={30}/>;

    var bars = <AiOutlineLine color={'#fece30'} size={55} style={{margin: -6, padding: -6}}/>;
    var emptybars = <AiOutlineLine color={'#cacaca'} size={55} style={{margin: -6, padding: -6}}/>;

    var fiveBars = <>{bars}{bars}{bars}{bars}{bars}</>;
    var fourBars = <>{bars}{bars}{bars}{bars}{emptybars}</>;
    var threeBars = <>{bars}{bars}{bars}{emptybars}{emptybars}</>;
    var twoBars = <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>;
    var oneBar = <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>;
  
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

    var reviewAttributeCounter = () => {
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
    reviewAttributeCounter();

    var overallStar = (count) => {
      if (count.totalAvg >= 4.01) {
        return (
          <>{stars}{stars}{stars}{stars}{stars}</>
        );
      } else if (count.totalAvg <= 4 && count.totalAvg >= 3.01) {
        return (
          <>{stars}{stars}{stars}{stars}{emptystars}</>
        );
      } else if (count.totalAvg <= 3 && count.totalAvg >= 2.01) {
        return (
          <>{stars}{stars}{stars}{emptystars}{emptystars}</>
        );
      } else if (count.totalAvg <= 2 && count.totalAvg >= 1.01) {
        return (
          <>{stars}{stars}{emptystars}{emptystars}{emptystars}</>
        );
      } else if (count.totalAvg <= 1) {
        return (
          <>{stars}{emptystars}{emptystars}{emptystars}{emptystars}</>
        );
      }
    };
    
    var featureBar = (count) => {
      if (count.features >= 4.01) {
        return (
          <>{fiveBars}</>
        );
      } else if (count.features <= 4 && count.features >= 3.01) {
        return (
          <>{fourBars}</>
        );
      } else if (count.features <= 3 && count.features >= 2.01) {
        return (
          <>{threeBars}</>
        );
      } else if (count.features <= 2 && count.features >= 1.01) {
        return (
          <>{twoBars}</>
        );
      } else if (count.features <= 1) {
        return (
          <>{oneBar}</>
        );
      }
    };
    
    var performanceBar = (count) => {
      if (count.performance >= 4.01) {
        return (
          <>{fiveBars}</>
        );
      } else if (count.performance <= 4 && count.performance >= 3.01) {
        return (
          <>{fourBars}</>
        );
      } else if (count.performance <= 3 && count.performance >= 2.01) {
        return (
          <>{threeBars}</>
        );
      } else if (count.performance <= 2 && count.performance >= 1.01) {
        return (
          <>{twoBars}</>
        );
      } else if (count.performance <= 1) {
        return (
          <>{oneBar}</>
        );
      }
    };
    
    var designBar = (count) => {
      if (count.design >= 4.01) {
        return (
          <>{fiveBars}</>
        );
      } else if (count.design <= 4 && count.design >= 3.01) {
        return (
          <>{fourBars}</>
        );
      } else if (count.design <= 3 && count.design >= 2.01) {
        return (
          <>{threeBars}</>
        );
      } else if (count.design <= 2 && count.design >= 1.01) {
        return (
          <>{twoBars}</>
        );
      } else if (count.design <= 1) {
        return (
          <>{oneBar}</>
        );
      }
    };
    
    var valueBar = (count) => {
      if (count.value >= 4.01) {
        return (
          <>{fiveBars}</>
        );
      } else if (count.value <= 4 && count.value >= 3.01) {
        return (
          <>{fourBars}</>
        );
      } else if (count.value <= 3 && count.value >= 2.01) {
        return (
          <>{threeBars}</>
        );
      } else if (count.value <= 2 && count.value >= 1.01) {
        return (
          <>{twoBars}</>
        );
      } else if (count.value <= 1) {
        return (
          <>{oneBar}</>
        );
      }
    };

    return (   
      <div>

        <div className='RatingSnapshot'>
          5{smallerStars}{count.fiveStar}
          <div></div>
          4{smallerStars}{count.fourStar}
          <div></div>
          3{smallerStars}{count.threeStar}
          <div></div>
          2{smallerStars}{count.twoStar}
          <div></div>
          1{smallerStars}{count.oneStar}
        </div>

        <div className='AvgCustomerRatings'>
          Overall {overallStar(count)}{count.totalAvg}
          <br></br>Features {featureBar(count)}{count.features}
          <br></br>Perfomance {performanceBar(count)}{count.performance}
          <br></br>Design {designBar(count)}{count.design}
          <br></br>Value {valueBar(count)}{count.value}
        </div>

        <div className='listedReviews'>
          {this.renderListOfReviews()}
        </div>

        <div className='pageswitching'>

          <span className='Down Page'
            onClick={() => this.changeView(this.state.view - 1)}>
            {backButton}
          </span>

          <span className='Up Page'
            onClick={() => this.changeView(this.state.view + 1)}>
            {nextButton}
          </span>

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

