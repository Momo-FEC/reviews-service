import React from 'react';

var ListedReviews = (props) => {
  return (
    <ul>
      <ul>
        {props.review.user}
        <div></div>
        {props.review.shortDescription}
        <div></div>
        {props.review.description}
      </ul>
    </ul>
  );
};

export default ListedReviews;