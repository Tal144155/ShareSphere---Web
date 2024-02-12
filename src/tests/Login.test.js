import {
  act,
  fireEvent,
  getByText,
  render,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../LoginPage/Login";
import userEvent from "@testing-library/user-event";

global.URL.createObjectURL = jest.fn();

describe("login page check", () => {
  test("input fileds updated", async () => {
    const usersList = [];
    const setlogedinuser = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login usersList={usersList} setlogedinuser={setlogedinuser} />
      </MemoryRouter>
    );

    const user_name = getByPlaceholderText("User Name");
    const password = getByPlaceholderText("Password");

    act(() => {
      userEvent.type(user_name, "tal144155");
      userEvent.type(password, "tal2024");
    });
    expect(user_name.value).toBe;
    ("tal144155");
    expect(password.value).toBe;
    ("tal2024");
  });

  test("check failed login", async () => {
    const usersList = [
      {
        user_name: "test",
        password: "test1234",
        first_name: "test",
        last_name: "test",
        pic: "",
      },
    ];
    const setlogedinuser = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login usersList={usersList} setlogedinuser={setlogedinuser} />
      </MemoryRouter>
    );

    const user_name = getByPlaceholderText("User Name");
    const password = getByPlaceholderText("Password");
    const button = getByText("Login");

    act(() => {
      userEvent.type(user_name, "tal144155");
      userEvent.type(password, "tal2024");
    });

    await act(async () => {
      userEvent.click(button);
    });

    await waitFor(() => {
      const linkElement = getByText(/Wrong user name or password!/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
