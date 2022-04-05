import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Camera from "../../images/camera.jpeg";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [...reviews] = useReview();
  let navigate = useNavigate();
  const seeAllReviews = () => {
    navigate("/review");
  };

  return (
    <div className="mx-auto w-11/12">
      <div className="mt-3 grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <div className="text-center">
            <h1 className="font-bold text-5xl my-2">Next Best Camera</h1>
            <h1 className="font-bold text-5xl mt-1 text-green-500">Sony FX3</h1>
          </div>
          <p className="mt-5 font-serif text-justify">
            The Sony FX3 is Sony's latest full-frame mirror less
            interchangeable-lens compact cinema camera announced on February 23,
            2021.The FX3 is based on the α7S III camera which was released the
            previous year. The camera will be available in mid-March 2021. The
            starting price of USD 3900/GBP 4200 makes it the most affordable
            model in Sony's Cinema line aimed at pro filmmakers.
          </p>
          <button className="rounded-full px-3 py-3 font-bold text-xl text-white mt-5 hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-2 bg-green-500">
            Live Demo
          </button>
        </div>
        <div>
          <img className="rounded" src={Camera} alt="" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center cmt-10 my-8">
        Customer Review
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {reviews.slice(0, 3).map((review) => {
          return <Reviews review={review} key={review.id}></Reviews>;
        })}
      </div>
      <div className="flex justify-center py-2">
        <button
          onClick={seeAllReviews}
          className="rounded-xl px-3 py-1 font-bold text-xl text-white mt-5 hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-2 bg-green-500"
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
