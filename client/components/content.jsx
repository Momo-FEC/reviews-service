import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';

var stars = <FaStar color={'#fece30'} size={13}/>;
var emptystars = <FaStar color={'#cacaca'} size={13}/>;

var bars = <AiOutlineLine color={'#fece30'} size={75} style={{margin: -8, padding: -8}}/>;
var emptybars = <AiOutlineLine color={'#cacaca'} size={75} style={{margin: -8, padding: -8}}/>;

var fiveBars = <>{bars}{bars}{bars}{bars}{bars}</>;
var fourBars = <>{bars}{bars}{bars}{bars}{emptybars}</>;
var threeBars = <>{bars}{bars}{bars}{emptybars}{emptybars}</>;
var twoBars = <>{bars}{bars}{emptybars}{emptybars}{emptybars}</>;
var oneBar = <>{bars}{emptybars}{emptybars}{emptybars}{emptybars}</>;

var yes = <MdCheckCircle size={12}/>;
var no = <MdCancel size={12}/>;

var recommender = (props) => {
  if (props.review.recommend === "yes") {
    return (
      <>{yes} Yes, I do recommend this product.</>
    );
  } else if (props.review.recommend === "no") {
    return (
      <>{no}No, I do not recommend this product.</>
    );
  }
};


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

const WholeBody = styled.div`
text-align: left;
`;

const WrittenPart = styled.div`
text-align: left;
display: inline-block;
width: 70%;
height: 270px;
`;

const GraphPart = styled.div`
text-align: left;
display: inline-block;
width: 30%;
height: 270px;
vertical-align:top;
`;

const User = styled.span`
font-family: Arial;
font-size: 12px;
text-align: left;
font-weight: bold;
`;

const ShortDescription = styled.h3`
font-family: Arial;
font-size: 16px;
text-align: left;
`;

const Description = styled.p`
font-family: Arial;
font-size: 13px;
text-align: left;
`;

const Date = styled.span`
font-family: Arial;
font-size: 13px;
text-align: left;
`;


const Loaders = styled.dt`
font-family: Arial;
font-size: 13px;
text-align: left;
`;

const Recommend = styled.dt`
font-family: Arial;
font-size: 13px;
text-align: left;
`;

const TopPart = styled.div`
text-align: left;
display: inline-block;
width: 100%;
`;

const Buttons = styled.button`
text-align: center;
text: Arial;
color: #333333;
background-color: #EDEDED;
margin: 0 3px 0 0;
padding: 2px 10px 2px 10px;
font-weight: 700;
line-height: 19.5px;
white-spade: nowrap;
word-spacing: 0px;
background-position: 0px 0px;
`;

var ListedReviews = (props) => {
  if (props.review.id < (props.view * 10) && props.review.id > ((props.view * 10) - 9)) {
    return (
      <WholeBody>

        <TopPart>
          {creater(props)}
          <> </>
          <User>{props.review.user}</User>
          ·
          <Date>{moment(props.review.timestamp).fromNow()}</Date>
          <ShortDescription>{props.review.shortDescription}</ShortDescription>
        </TopPart>

        <WrittenPart>
          <Description>{props.review.description}</Description>
          <Recommend>{recommender(props)}</Recommend>
        </WrittenPart>

        <GraphPart>
          <Loaders>Features <br></br> {featureLoader(props)}</Loaders>
          <Loaders>Performance <br></br> {performanceLoader(props)}</Loaders>
          <Loaders>Design <br></br> {designLoader(props)}</Loaders>
          <Loaders>Value <br></br> {valueLoader(props)}</Loaders>
        </GraphPart>

        <Description>Helpful?<> </><Buttons>Yes·{props.review.helpfulcount}</Buttons> <Buttons>No·{props.review.unhelpfulcount}</Buttons> <Buttons>Report</Buttons></Description>
        <br></br><br></br><br></br>
      </WholeBody>
    );
  } else {
    return null;
  }
};

export default ListedReviews;