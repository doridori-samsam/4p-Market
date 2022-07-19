import "./CommentList.scss";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import Comment from "./Comment";

function CommentList({ postid }) {
  const { token } = useContext(UserContext);
  const [comments, setComments] = useState();
  useEffect(() => {
    const authToken = "Bearer " + token;
    const url = "https://mandarin.api.weniv.co.kr/post/" + postid + "/comments";
    async function getUser() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        });
        setComments(res.data.comments);
      } catch (err) {}
    }
    getUser();
  }, [postid, token]);

  return (
    <div className="container-comments">
      <ul className="list-comments">
        <Comment comments={comments} />
      </ul>
    </div>
  );
}

export default CommentList;