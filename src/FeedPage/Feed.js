import "./Feed.css";
import LeftMenu from "./LeftMenu/LeftMenu";
import SearchBox from "./TopBar/SearchBox";
import Feature from "./LeftMenu/Feature";
import Post from "./Post/Post";
import { useState } from "react";
import posts from "../data/posts.json";
import NewPost from "./NewPost/NewPost";
import NewPostModal from "./NewPost/NewPostModal";
import EditPostModal from "./EditPost/EditPostModal";
import AddCommentModal from "./Comments/AddCommentModal";
import EditCommentModal from "./EditComment/EditCommentModal";

const Feed = (props) => {
  const [postsList, setpostsList] = useState(posts);
  const [posttoedit, setposttoedit] = useState({
    text: "",
    imgurl: "",
    id: "",
  });

  const [postaddcomment, setpostaddcomment] = useState(0);

  const [commenttoedit, setcommenttoedit] = useState({
    commentid: "",
    comment: "",
    postid: "",
  });

  function handleAddComment(id) {
    setpostaddcomment(id);
    console.log(postaddcomment);
  }

  function handleDelete(id) {
    const arrayNewPost = [];
    for (let i = 0; i < postsList.length; i++) {
      if (postsList[i].id !== id) {
        arrayNewPost.push(postsList[i]);
      }
    }
    setpostsList(arrayNewPost);
  }

  function handleEdit(id, text, img) {
    setposttoedit({
      text: text,
      imgurl: img,
      id: id,
    });
  }

  function handleDeleteComment(postid, commentid) {
    const arrayNewPost = [];
    const arrayNewComment = [];
    for (let i = 0; i < postsList.length; i++) {
      if (postsList[i].id !== postid) {
        arrayNewPost.push(postsList[i]);
      } else {
        const commentslist = postsList[i].comments;
        for (let j = 0; j < commentslist.length; j++) {
          if (commentslist[j].id !== commentid) {
            arrayNewComment.push(commentslist[j]);
          }
        }
        const newobj = {
          ...postsList[i],
          comment_number: postsList[i].comment_number - 1,
          comments: arrayNewComment,
        };
        arrayNewPost.push(newobj);
      }
    }
    setpostsList(arrayNewPost);
  }

  function handleEditComment(commentid, postid, comment) {
    setcommenttoedit({
      commentid: commentid,
      comment: comment,
      postid: postid,
    });
  }
  const [isDark, setisDark] = useState(false);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Feature />
      <AddCommentModal
        postid={postaddcomment}
        postsList={postsList}
        setpostsList={setpostsList}
      />
      <NewPostModal postsList={postsList} setpostsList={setpostsList} />

      <EditCommentModal
        postsList={postsList}
        setpostsList={setpostsList}
        commenttoedit={commenttoedit}
        setcommenttoedit={setcommenttoedit}
      />

      <EditPostModal
        postsList={postsList}
        setpostsList={setpostsList}
        posttoedit={posttoedit}
        setposttoedit={setposttoedit}
        text={posttoedit.text}
        img={posttoedit.imgurl}
        id={posttoedit.id}
      />

      <nav className="navbar fixed-top bg-body-tertiary" id="top-bar">
        <div className="container-fluid">
          <div id="slogen">ShareSphere</div>
          <SearchBox />
        </div>
      </nav>
      <div id="top-bar">
        <div id="slogen">ShareSphere</div>
      </div>
      <div id="feed-grid" className="container-fluid text-center .d-flex">
        <div className="row">
          <div className="col-3" id="left-bar">
            <LeftMenu
              usersList={props.usersList}
              logedinuser={props.logedinuser}
            />
          </div>
          <div className="col-6" id="posts">
            <br />
            <NewPost user_pic={"/profilepics/talpic.jpg"} />
            {postsList.map((post) => (
              <Post
                {...post}
                setpostsList={setpostsList}
                postsList={postsList}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleAddComment={handleAddComment}
                handleDeleteComment={handleDeleteComment}
                handleEditComment={handleEditComment}
              />
            ))}
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
