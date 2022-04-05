import React from "react";
import useReview from "../../hooks/useReview";
import Reviews from "../Reviews/Reviews";

const Review = () => {
  const [...reviews] = useReview();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-3 w-11/12 mx-auto mb-5">
      {reviews.map((review) => {
        return <Reviews review={review} key={review.id}></Reviews>;
      })}
    </div>
  );
};

export default Review;
