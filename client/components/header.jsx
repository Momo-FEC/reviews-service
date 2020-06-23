import React from 'react';

var RatingSnapshot = (props) => {
  //console.log('props.length = ', props.length)
  // console.log('props.review.overall = ', props.review.overall);
  //console.log('props.review.id = ', props.review.id)
  //console.log('props.review.test = ', props.test);
  //console.log(props.overAllRating)

  return (
    <ul>
      <div>
        {props.review.overall === 5 && <ul> {props.review.overall} </ul>}
      </div>
      <div>
        {props.review.overall === 4 && <ul> {props.review.overall} </ul>}
      </div>
      <div>
        {props.review.overall === 3 && <ul> {props.review.overall} </ul>}
      </div>
      <div>
        {props.review.overall === 2 && <ul> {props.review.overall} </ul>}
      </div>
      <div>
        {props.review.overall === 1 && <ul> {props.review.overall} </ul>}
      </div>
    </ul>
  ); 
};

export default RatingSnapshot;