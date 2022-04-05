import React from "react";
import Question1 from "../Question1/Question1";
import Question2 from "../Question2/Question2";
import Question3 from "../Question3/Question3";

const Blog = () => {
  return (
    <div className="lg:w-11/12 w-full mx-auto">
      <Question1></Question1>
      <Question2></Question2>
      <Question3></Question3>
    </div>
  );
};

export default Blog;
