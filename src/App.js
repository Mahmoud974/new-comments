import axios from "axios";
import React, { useEffect, useState } from "react";
import Comments from "./components/Comments";
import Replies from "./components/Replies";

const App = () => {
  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/comments")
      .then((data) => setDataComment(data.data));
  }, []);
  return (
    <main className="flex container mx-auto flex-col justify-center ">
      {dataComment.map((comment, index) => (
        <div className=" flex flex-col mx-auto">
          <Comments comment={comment} key={index.id} />
          {comment.replies.map((comment, index) => (
            <div className="flex flex-row">
              <div className="w-1 h-52 bg-slate-900"></div>
              <Replies comment={comment} key={index.id} />
            </div>
          ))}
        </div>
      ))}
      <form className="flex ">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="ml-10 flex flex-col bg-white w-[60em] rounded-xl mt-6 h-48 mx-auto border border-slate-900"
        ></textarea>
        <input
          type="submit"
          value="SEND"
          className="bg-blue-800 px-8 rounded py-2 text-white font-bold"
        />
      </form>
    </main>
  );
};

export default App;
