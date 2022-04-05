import React from "react";

const Question3 = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5 font-mono">
        <span className="text-red-700 underline">Question - 03:</span> Write
        difference among Inline, Inline-block and Block elements.
      </h1>
      <h2 className="text-green-700 font-bold underline text-2xl mb-5">
        Answer:
      </h2>
      <p className="text-justify text-xl font-serif">
        <span className="underline font-bold">Inline Element:</span> Inline
        elements occupy only enough width that is sufficient to it and allows
        other elements next to it which are inline. Inline elements don’t start
        from a new line and don’t have top and bottom margins as block elements
        have. <br />
        Examples of Inline elements:
        <li>
          <span className="text-red-600">{" <a> "}</span>: This tag is used for
          including hyperlinks in the webpage.
        </li>
        <li>
          <span className="text-red-600">{" <span> "}</span>: This is an inline
          container that takes necessary space only.
        </li>
        <span className="underline font-bold">Inline-Block Element:</span> It
        remains inline with all the text around the element and appears the same
        as inline. The height and width of that element become modifiable.They
        can do everything that inline does but can also be set some widths,
        heights and vertical margins!
        <br />
        Examples of Inline-Block elements:
        <li>
          <span className="text-red-600">{" <input> "}</span>: We can set height
          and width to this element.
        </li>
        <li>
          <span className="text-red-600">{" <button> "}</span>: We can make it
          inline element from block element.
        </li>
        <span className="underline font-bold">Block Element:</span> They consume
        the entire width available irrespective of their sufficiency. They
        always start in a new line and have top and bottom margins. It does not
        contain any other elements next to it. <br />
        Examples of Block elements:
        <li>
          <span className="text-red-600">{" <h1>-<h6> "}</span>: This element is
          used for including headings of different sizes ranging from 1 to 6.
        </li>
        <li>
          <span className="text-red-600">{" <div> "}</span>:This is a container
          tag and is used to make separate divisions of content on the web page.
        </li>
      </p>
    </div>
  );
};

export default Question3;
