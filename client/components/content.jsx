import React from 'react';
import moment from 'moment';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';

var stars = <FaStar color={'#fece30'}/>;
var emptystars = <FaStar color={'#cacaca'}/>;

var bars = <AiOutlineLine color={'#fece30'} size={55} style={{margin: -6, padding: -6}}/>;
var emptybars = <AiOutlineLine color={'#cacaca'} size={55} style={{margin: -6, padding: -6}}/>;

var fiveBars = <>{bars}{bars}{bars}{bars}{bars}</>;
var fourBars = <>{bars}{bars}{bars}{bars}{emptybars}</>;
var threeBars = <>{bars}{bars}{bars}{emptybars}{emptybars}</>;
var twoBars = <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>;
var oneBar = <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>;


var creater = (props) => {
  if (props.overallRating === 5) {
    return (
      <>{stars}{stars}{stars}{stars}{stars}</>
    );
  } else if (props.overallRating === 4) {
    return (
      <>{stars}{stars}{stars}{stars}{emptystars}</>
    );
  } else if (props.overallRating === 3) {
    return (
      <>{stars}{stars}{stars}{emptystars}{emptystars}</>
    );
  } else if (props.overallRating === 2) {
    return (
      <>{stars}{stars}{emptystars}{emptystars}{emptystars}</>
    );
  } else if (props.overallRating === 1) {
    return (
      <>{stars}{emptystars}{emptystars}{emptystars}{emptystars}</>
    );
  }
};

var featureLoader = (props) => {
  if (props.review.feature === 5) {
    return (
      <>{fiveBars}</>
    );
  } else if (props.review.feature === 4) {
    return (
      <>{fourBars}</>
    );
  } else if (props.review.feature === 3) {
    return (
      <>{threeBars}</>
    );
  } else if (props.review.feature === 2) {
    return (
      <>{twoBars}</>
    );
  } else if (props.review.feature === 1) {
    return (
      <>{oneBar}</>
    );
  }
};

var performanceLoader = (props) => {
  if (props.review.performance === 5) {
    return (
      <>{fiveBars}</>
    );
  } else if (props.review.performance === 4) {
    return (
      <>{fourBars}</>
    );
  } else if (props.review.performance === 3) {
    return (
      <>{threeBars}</>
    );
  } else if (props.review.performance === 2) {
    return (
      <>{twoBars}</>
    );
  } else if (props.review.performance === 1) {
    return (
      <>{oneBar}</>
    );
  }
};

var designLoader = (props) => {
  if (props.review.design === 5) {
    return (
      <>{fiveBars}</>
    );
  } else if (props.review.design === 4) {
    return (
      <>{fourBars}</>
    );
  } else if (props.review.design === 3) {
    return (
      <>{threeBars}</>
    );
  } else if (props.review.design === 2) {
    return (
      <>{twoBars}</>
    );
  } else if (props.review.design === 1) {
    return (
      <>{oneBar}</>
    );
  }
};

var valueLoader = (props) => {
  if (props.review.value === 5) {
    return (
      <>{fiveBars}</>
    );
  } else if (props.review.value === 4) {
    return (
      <>{fourBars}</>
    );
  } else if (props.review.value === 3) {
    return (
      <>{threeBars}</>
    );
  } else if (props.review.value === 2) {
    return (
      <>{twoBars}</>
    );
  } else if (props.review.value === 1) {
    return (
      <>{oneBar}</>
    );
  }
};

var ListedReviews = (props) => {
  if (props.review.id < (props.view * 10) && props.review.id > ((props.view * 10) - 9)) {
    return (
      <div>
        <div>
          {creater(props)}
          {props.review.user}
          -
          {moment(props.review.timestamp).fromNow()}
          <div></div>
          {props.review.shortDescription}
          <div></div>
          {props.review.description}
          <div></div>
          Helpful? <button>Yes·{props.review.helpfulcount}</button> <button>No·{props.review.unhelpfulcount}</button> <button>Report</button>
        </div>
        <div>
          Features <br></br> {featureLoader(props)}<br></br>
          Performance <br></br> {performanceLoader(props)}<br></br>
          Design <br></br> {designLoader(props)}<br></br>
          Value <br></br> {valueLoader(props)}<br></br>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ListedReviews;