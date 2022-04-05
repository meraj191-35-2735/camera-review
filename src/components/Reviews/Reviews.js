import React from "react";

const Reviews = (props) => {
  const { name, ratings, reviewText, img } = props.review;
  return (
    <div className="border-2 p-4 rounded-2xl shadow-xl">
      <img
        className="w-12 h-12 rounded-full mx-auto my-2"
        src={img}
        alt="customerImage"
      />
      <h1 className="text-center font-bold text-lg">{name}</h1>
      <p className="text-center my-2">
        <small className="text-gray-500 font-bold">Ratings: {ratings}</small>
      </p>
      <p className="text-justify">{reviewText}</p>
    </div>
  );
};

export default Reviews;
