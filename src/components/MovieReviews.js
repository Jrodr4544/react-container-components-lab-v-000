// Code MovieReviews Here
import React from 'react';
const Review = ({ title, summary }) => (
  <div className="Review">
    <h3>{ title }</h3>
    <p>{ summary }</p>
  </div>
)

<<<<<<< HEAD
const ReviewList = ( {reviews} ) => (
=======
const MovieReviews = ( {reviews} ) => (
>>>>>>> fb4ea1097c8dc045e48fc497be42977e36d30e4f

  <div className="review-list">
    { reviews.map(review => <Review title={review.display_title} summary={review.sumary_short} />) }
  </div>
)

export default ReviewList