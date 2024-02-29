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
import Toggle from "./Toggle/Toggle";
import LogOutButton from "./LogOut/logoutbutton";
import RightBar from "./RightBar/RightBar";

//this functin gets post array and id of a post, and deletes it from the array
export function PostListAfterDelete(postsList, id) {
  const arrayNewPost = [];
  for (let i = 0; i < postsList.length; i++) {
    //if the post id is not equal, push it to the new array
    if (postsList[i].id !== id) {
      arrayNewPost.push(postsList[i]);
    }
  }
  //return the new array of posts
  return arrayNewPost;
}

//this function gets comments array and a comment id, and deletes it from the array
export function CommentListAfterDelete(commentslist, commentid) {
  const arrayNewComment = [];
  for (let j = 0; j < commentslist.length; j++) {
    //pushing the comment if the id is not equal to the one we search
    if (commentslist[j].id !== commentid) {
      arrayNewComment.push(commentslist[j]);
    }
  }
  //returning the new array of comments
  return arrayNewComment;
}

const Feed = (props) => {
  //creating the state of the posts list and the post need to be edited
  const [postsList, setpostsList] = useState(posts);
  const [posttoedit, setposttoedit] = useState({
    text: "",
    imgurl: "",
    id: "",
  });

  //creating the state of the post that the comment that will be added
  const [postaddcomment, setpostaddcomment] = useState(0);

  //getting the info of the comment that will be edited
  const [commenttoedit, setcommenttoedit] = useState({
    commentid: "",
    comment: "",
    postid: "",
  });

  //handaling add comment, setting the post that the comment will be added to
  //TODO:: change here
  function handleAddComment(id) {
    setpostaddcomment(id);
  }

  //setting the postslist after deleting a post
    //TODO:: change here
  function handleDelete(id) {
    setpostsList(PostListAfterDelete(postsList, id));
  }

  //setting the content of the post to be edited
    //TODO:: change here
  function handleEdit(id, text, img) {
    setposttoedit({
      text: text,
      imgurl: img,
      id: id,
    });
  }

  //deleting comments from the postslist
  function handleDeleteComment(postid, commentid) {
    const arrayNewPost = [];
    for (let i = 0; i < postsList.length; i++) {
      //searching for the specific post
      if (postsList[i].id !== postid) {
        arrayNewPost.push(postsList[i]);
      } else {
        //when found, get the new array of comments without the specific one
        const commentslist = postsList[i].comments;
        const arrayNewComment = CommentListAfterDelete(commentslist, commentid);
        const newobj = {
          ...postsList[i],
          comment_number: postsList[i].comment_number - 1,
          comments: arrayNewComment,
        };
        //push the new post
        arrayNewPost.push(newobj);
      }
    }
    //set the posts list without the comment wanted
    setpostsList(arrayNewPost);
  }

  //change the comment content to be edited
  function handleEditComment(commentid, postid, comment) {
    setcommenttoedit({
      commentid: commentid,
      comment: comment,
      postid: postid,
    });
  }

  //setting the state for dark/light mode


  return (
    <div data-theme={"light"}>

      {/*rendering all the modals */}
      <Feature />
      <AddCommentModal
        postid={postaddcomment}
        postsList={postsList}
        setpostsList={setpostsList}
        logedinuser={props.logedinuser}
      />
      <NewPostModal
        postsList={postsList}
        setpostsList={setpostsList}
        logedinuser={props.logedinuser}
      />

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

      {/*rendering the componnents of the feed */}

      <nav className="navbar fixed-top bg-body-tertiary" id="top-bar">
        <div className="container-fluid">
          <div id="slogen">
            <img id="image-style2" src="/logopic.png" alt=""></img>
          </div>
          <SearchBox />
          <LogOutButton setlogedinuser={props.setlogedinuser} />
          <Toggle isChecked={isDark} handleChange={() => setisDark(!isDark)} />
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
            <NewPost logedinuser={props.logedinuser} />
            {/*showing all the posts on the list */}
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
                logedinuser={props.logedinuser}
              />
            ))}
          </div>
          <div className="col-3" id="right-bar">
            <RightBar
              logedinuser={props.logedinuser}
              usersList={props.usersList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
