import React from "react";
import notFound from "../../images/not-found.png";

const NotFound = () => {
  return (
    <div>
      <img className="mx-auto lg:py-4 py-2" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
