import React from "react";
import { render, userEvent, act } from "@testing-library/react";
import { PostListAfterDelete, CommentListAfterDelete } from "../FeedPage/Feed";
import { MemoryRouter, Router } from "react-router-dom";
import { waitFor, fireEvent } from "@testing-library/react";
import App from "../App";

test("check removes post from postsList", () => {
  const initialPostsList = [
    {
      key: 1,
      id: 1,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      user_pic: "/profilepics/talpic.jpg",
      time: "2 days ago",
      text: "I have uploaded the image, but I need to preview it before uploading in ReactJS. Could someone assist me by providing the solution or a sample program? I have been stuck with this for quite some time. Please find my code below.",
      post_pic: "/postpics/pic1.jpg",
      like_number: 10,
      comment_number: 2,
      did_like: false,
      comments: [
        {
          key: 1,
          id: 1,
          user_name: "tal144155",
          first_name: "Tal",
          last_name: "Ariel Ziv",
          pic: "/profilepics/talpic.jpg",
          comment:
            "hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111",
        },
        {
          key: 2,
          id: 2,
          user_name: "tal144155",
          first_name: "Tal",
          last_name: "Ariel Ziv",
          pic: "/profilepics/talpic.jpg",
          comment: "hello22222222222",
        },
      ],
    },
    {
      key: 2,
      id: 2,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      user_pic: "/profilepics/talpic.jpg",
      time: "2 days ago",
      text: "heyyyyy",
      post_pic: "/profilepics/talpic.jpg",
      like_number: 10,
      comment_number: 1,
      did_like: false,
      comments: [
        {
          key: 3,
          id: 3,
          user_name: "tal144155",
          first_name: "Tal",
          last_name: "Ariel Ziv",
          pic: "/profilepics/talpic.jpg",
          comment: "hello22222222222",
        },
      ],
    },
  ];

  const updatedPostsList = PostListAfterDelete(initialPostsList, 1);
  expect(updatedPostsList).toEqual([
    {
      key: 2,
      id: 2,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      user_pic: "/profilepics/talpic.jpg",
      time: "2 days ago",
      text: "heyyyyy",
      post_pic: "/profilepics/talpic.jpg",
      like_number: 10,
      comment_number: 1,
      did_like: false,
      comments: [
        {
          key: 3,
          id: 3,
          user_name: "tal144155",
          first_name: "Tal",
          last_name: "Ariel Ziv",
          pic: "/profilepics/talpic.jpg",
          comment: "hello22222222222",
        },
      ],
    },
  ]);
});

test("check delete comment", () => {
  const comments = [
    {
      key: 1,
      id: 1,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      pic: "/profilepics/talpic.jpg",
      comment:
        "hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111hello1111111111",
    },
    {
      key: 2,
      id: 2,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      pic: "/profilepics/talpic.jpg",
      comment: "hello22222222222",
    },
  ];

  const CommentList = CommentListAfterDelete(comments, 1);
  expect(CommentList).toEqual([
    {
      key: 2,
      id: 2,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      pic: "/profilepics/talpic.jpg",
      comment: "hello22222222222",
    },
  ]);
});

test("check add post", async () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  await waitFor(() => {
    const user_name = getByPlaceholderText("User Name");
    const password = getByPlaceholderText("Password");
    const button = getByText("Login");

    act(() => {
      fireEvent.change(user_name, { target: { value: "tal144155" } });
      fireEvent.change(password, { target: { value: "tal2024" } });
    });

    act(() => {
      fireEvent.click(button);
    });
  });

  await waitFor(() => {
    const linkElement = getByText(/what are you thinking about/i);
    expect(linkElement).toBeInTheDocument();
  });
  


});
