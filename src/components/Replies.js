import axios from "axios";
import React, { useEffect } from "react";

const Replies = ({ comment }) => {
  const deleteComment = () => {
    axios.delete("http://localhost:3004/comments", comment.id);
  };
  useEffect(() => {}, []);
  return (
    <div
      className=" ml-10 flex flex-col bg-slate-800 text-white w-[50em] rounded-xl mt-6 h-48 mx-auto"
      onClick={deleteComment}
    >
      <div className="container justify-evenly mx-auto px-12 mt-8">
        <div className="flex flex-row justify-between ">
          <div className="flex items-center">
            <img src={comment.user.image.webp} alt="" className="w-12 h-12 " />
            <p className="font-bold ml-4">{comment.user.username}</p>
            <p className="pl-4 text-grayishBlue">{comment.createdAt}</p>
          </div>
          <div className="font-bold text-blue-800">
            <p className="">
              <i className="fa-solid fa-reply mr-2 "></i>Reply
            </p>
          </div>
        </div>
        <div>
          <p className="text-grayishBlue mt-4">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Replies;
