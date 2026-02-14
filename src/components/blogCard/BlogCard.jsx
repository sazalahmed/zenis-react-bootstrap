import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div className="blog_item">
        <Link to="/" className="blog_img">
          <img src={blog.image} alt={blog.title} />
        </Link>
        <div className="blog_text">
          <ul className="top">
            <li>
              <LuUserRound />
              {blog.author}
            </li>
            <li>
              <BiCalendar />
              {blog.created_at}
            </li>
          </ul>
          <Link className="title" to={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
          <ul className="bottom">
            <li>
              <Link to="/">
                read more <FaArrowUp />
              </Link>
            </li>
            <li>
              <span>
                <FaRegCommentDots /> {blog.tital_comment} Comments
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
