import React from "react";

const Question1 = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5 font-mono">
        <span className="text-red-700 underline">Question - 01:</span> What is
        Semantic Tag ?
      </h1>
      <h2 className="text-green-700 font-bold underline text-2xl mb-5">
        Answer:
      </h2>
      <p className="text-justify text-xl font-serif">
        Semantic tag is HTML tag that identifies the meaning of a web page
        rather than just the presentation. For example, a
        <span className="text-red-600">{" <p>"}</span> tag indicates that the
        bound text is a paragraph. This is both semantic and representational
        because people know what paragraphs are and how browsers need to display
        them. Conversely, tags such as
        <span className="text-red-600">{" <b>"}</span> and
        <span className="text-red-600">{" <i> "}</span> are not semantic. They
        simply define what the text should look like (bold or italic), and do
        not pay extra for markup. Semantic HTML tags provide information about
        the contents of those tags that goes beyond just how they look on a
        page. Text that is enclosed in the{" "}
        <span className="text-red-600">{" <code>"}</span> tag is immediately
        recognized by the browser as some type of coding language.
      </p>
    </div>
  );
};

export default Question1;
