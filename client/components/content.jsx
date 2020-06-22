import React from 'react';

var ListedReviews = (props) => {
    return (
        <ul>
            <li>
                {props.review.user}
            </li>
        </ul>
    )
}

export default ListedReviews;