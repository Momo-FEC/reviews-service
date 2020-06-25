import React from 'react';
import moment from 'moment';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';

var stars = <FaStar color={'#fece30'}/>;
var emptystars = <FaStar color={'#cacaca'}/>;

var bars = <AiOutlineLine color={'#fece30'} size={55} style={{margin:-6, padding:-6}}/>;
var emptybars = <AiOutlineLine color={'#cacaca'} size={55} style={{margin:-6, padding:-6}}/>;

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
      <>{bars}{bars}{bars}{bars}{bars}{bars}</>
    );
  } else if (props.review.feature === 4) {
    return (
      <>{bars}{bars}{bars}{bars}{emptybars}</>
    );
  } else if (props.review.feature === 3) {
    return (
      <>{bars}{bars}{bars}{emptybars}{emptybars}</>
    );
  } else if (props.review.feature === 2) {
    return (
      <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>
    );
  } else if (props.review.feature === 1) {
    return (
      <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>
    );
  }
};

var performanceLoader = (props) => {
  if (props.review.performance === 5) {
    return (
      <>{bars}{bars}{bars}{bars}{bars}</>
    );
  } else if (props.review.performance === 4) {
    return (
      <>{bars}{bars}{bars}{bars}{emptybars}</>
    );
  } else if (props.review.performance === 3) {
    return (
      <>{bars}{bars}{bars}{emptybars}{emptybars}</>
    );
  } else if (props.review.performance === 2) {
    return (
      <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>
    );
  } else if (props.review.performance === 1) {
    return (
      <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>
    );
  }
};

var designLoader = (props) => {
  if (props.review.design === 5) {
    return (
      <>{bars}{bars}{bars}{bars}{bars}</>
    );
  } else if (props.review.design === 4) {
    return (
      <>{bars}{bars}{bars}{bars}{emptybars}</>
    );
  } else if (props.review.design === 3) {
    return (
      <>{bars}{bars}{bars}{emptybars}{emptybars}</>
    );
  } else if (props.review.design === 2) {
    return (
      <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>
    );
  } else if (props.review.design === 1) {
    return (
      <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>
    );
  }
};

var valueLoader = (props) => {
  if (props.review.value === 5) {
    return (
      <>{bars}{bars}{bars}{bars}{bars}{bars}</>
    );
  } else if (props.review.value === 4) {
    return (
      <>{bars}{bars}{bars}{bars}{emptybars}</>
    );
  } else if (props.review.value === 3) {
    return (
      <>{bars}{bars}{bars}{emptybars}{emptybars}</>
    );
  } else if (props.review.value === 2) {
    return (
      <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>
    );
  } else if (props.review.value === 1) {
    return (
      <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>
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
        <div>
          <ul>Features <ul></ul> {featureLoader(props)}</ul>
          <ul>Performance <ul></ul> {performanceLoader(props)}</ul>
          <ul>Design <ul></ul> {designLoader(props)}</ul>
          <ul>Value <ul></ul> {valueLoader(props)}</ul>
        </div>
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
        <div>
          <ul>Features <ul></ul> {featureLoader(props)}</ul>
          <ul>Performance <ul></ul> {performanceLoader(props)}</ul>
          <ul>Design <ul></ul> {designLoader(props)}</ul>
          <ul>Value <ul></ul> {valueLoader(props)}</ul>
        </div>
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
        <div>
          <ul>Features <ul></ul> {featureLoader(props)}</ul>
          <ul>Performance <ul></ul> {performanceLoader(props)}</ul>
          <ul>Design <ul></ul> {designLoader(props)}</ul>
          <ul>Value <ul></ul> {valueLoader(props)}</ul>
        </div>
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
        <div>
          <ul>Features <ul></ul> {featureLoader(props)}</ul>
          <ul>Performance <ul></ul> {performanceLoader(props)}</ul>
          <ul>Design <ul></ul> {designLoader(props)}</ul>
          <ul>Value <ul></ul> {valueLoader(props)}</ul>
        </div>
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
        <div>
          <ul>Features <ul></ul> {featureLoader(props)}</ul>
          <ul>Performance <ul></ul> {performanceLoader(props)}</ul>
          <ul>Design <ul></ul> {designLoader(props)}</ul>
          <ul>Value <ul></ul> {valueLoader(props)}</ul>
        </div>
      </ul>
    );
  } else {
    return null;
  }
};

export default ListedReviews;