import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center py-5 text-white font-bold bg-green-500">
        <CustomLink to="/" className="mr-3">
          Home
        </CustomLink>
        <CustomLink to="/review" className="mr-3">
          Reviews
        </CustomLink>
        <CustomLink to="/dashboard" className="mr-3">
          Dashboard
        </CustomLink>
        <CustomLink to="/blog" className="mr-3">
          Blog
        </CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
