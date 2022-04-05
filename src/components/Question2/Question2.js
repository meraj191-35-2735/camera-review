import React from "react";

const Question2 = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5 font-mono">
        <span className="text-red-700 underline">Question - 02:</span> What is
        Context API ?
      </h1>
      <h2 className="text-green-700 font-bold underline text-2xl mb-5">
        Answer:
      </h2>
      <p className="text-justify text-xl font-serif">
        The React Context API is a way to create a global variable for a React
        app that can be passed around. This is an alternative to "prop drilling"
        or moving props from grandparents to parents of children. Context is
        also touted as an easier, lighter approach to state management using
        Redux. It provides a consumer and a provider. Donor is an element that,
        as the name implies, the state gives to its children. It will contain
        the “store” and will be the parent of all the items the store may need
        the consumer as it will be an element that consumes and consumes the
        state.
      </p>
    </div>
  );
};

export default Question2;
