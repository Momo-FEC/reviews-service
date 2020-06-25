import React from 'react';

var RatingSnapshot = (props) => {
  if (props.review.overall === 5) {
    return (
      5
    );
  } else if (props.review.overall === 4) {
    return (
      4
    );
  } else if (props.review.overall === 3) {
    return (
      3
    );
  } else if (props.review.overall === 2) {
    return (
      2
    );
  } else if (props.review.overall === 1) {
    return (
      1
    );
  } else {
    return null;
  }
};

export default RatingSnapshot;