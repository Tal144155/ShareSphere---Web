import {
  act,
  render,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Register from "../RegisterPage/Register";

global.URL.createObjectURL = jest.fn();

//test for checking form validation

describe("register page check", () => {
  test("check validation on form", async () => {
    const userslist = [
      {
        user_name: "tal144155",
        password: "tal2024",
        first_name: "Tal",
        last_name: "Ariel Ziv",
        pic: "/profilepics/talpic.jpg",
      },
    ];
    const setusersist = jest.fn();
    const { getByPlaceholderText, getByText, findByText } = render(
      <MemoryRouter>
        <Register usersList={userslist} setusersList={setusersist} />
      </MemoryRouter>
    );
    const user_name = getByPlaceholderText("user name");
    const password = getByPlaceholderText("password");
    const first_name = getByPlaceholderText("first name");
    const last_name = getByPlaceholderText("last name");
    const repass = getByPlaceholderText("re-enter password");
    const button = getByText("Sign me Up!");

    act(() => {
      userEvent.type(user_name, "tal144155");
      userEvent.type(password, "tal");
      userEvent.type(first_name, "1234");
      userEvent.type(last_name, "1234");
      userEvent.type(repass, "123456");
    });

    await act(async () => {
      userEvent.click(button);
    });

    await waitFor(async () => {
      const passwordcheck = await findByText("Must contains letters & numbers");
      const namecheck = await findByText("Name with letters only!");
      const lastcheck = await findByText("Letters only!");
      const usercheck = await findByText("User name already exists!");
      const repasscheck = await findByText("Password doesn't match!");


      expect(passwordcheck).toBeInTheDocument();
      expect(namecheck).toBeInTheDocument();
      expect(lastcheck).toBeInTheDocument();
      expect(usercheck).toBeInTheDocument();
      expect(repasscheck).toBeInTheDocument();

    });
  });
});
