import React from 'react';

var ListedReviews = (props) => {
  if (props.review.id < 20 && props.view === 'pageOne') {
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
  } else if (props.review.id > 20 && props.review.id < 40 && props.view === 'pageTwo') {
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
  } else if (props.review.id > 40 && props.review.id < 60 && props.view === 'pageThree') {
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
  } else if (props.review.id > 60 && props.review.id < 80 && props.view === 'pageFour') {
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
  } else if (props.review.id > 80 && props.review.id < 100 && props.view === 'pageFive') {
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
  } else {
    return null;
  }
};

export default ListedReviews;