import React from 'react';
import moment from 'moment';
import { FaStar } from 'react-icons/fa';

var stars = <FaStar color={'#fece30'}/>;
var emptystars = <FaStar color={'#cacaca'}/>;

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


var ListedReviews = (props) => {
  if (props.review.id < 20 && props.view === 'pageOne') {
    return (
      <ul>
        <ul>
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
        </ul>
      </ul>
    );
  } else if (props.review.id > 20 && props.review.id < 40 && props.view === 'pageTwo') {
    return (
      <ul>
        <ul>
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
        </ul>
      </ul>
    );
  } else if (props.review.id > 40 && props.review.id < 60 && props.view === 'pageThree') {
    return (
      <ul>
        <ul>
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
        </ul>
      </ul>
    );
  } else if (props.review.id > 60 && props.review.id < 80 && props.view === 'pageFour') {
    return (
      <ul>
        <ul>
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
        </ul>
      </ul>
    );
  } else if (props.review.id > 80 && props.review.id < 100 && props.view === 'pageFive') {
    return (
      <ul>
        <ul>
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
        </ul>
      </ul>
    );
  } else {
    return null;
  }
};

export default ListedReviews;