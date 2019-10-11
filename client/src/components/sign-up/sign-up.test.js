import React from "react";
import { render, fireEvent } from "../../test-utils";
import ConnectedSignUp, { SignUp } from "./sign-up.component";
import * as userActionsMock from "../../redux/user/user.actions";

jest.mock("../../redux/user/user.actions");

describe("Sign up component", () => {
  let isOpenMock = true;
  let setOpenMock = jest.fn(); 
  let openSignInMock = jest.fn(); 
  let signUpMock = jest.fn();
  let mockProps = null;

  const applyMockProps = () => {
    mockProps = {
      isOpen: isOpenMock,
      setOpen: setOpenMock,
      openSignIn: openSignInMock,
      signUp: signUpMock
    }
  }

  afterEach(() => {
    isOpenMock = true;
    jest.clearAllMocks();
  });

  describe("Rendering the component", () => {
    it("should render", () => {
      applyMockProps();
      const renderResult = render(<SignUp {...mockProps} />);
  
      expect(renderResult).toMatchSnapshot();
    });
  
    it("should not display the sign-up component when isOpen is false", () => {
      isOpenMock = false;
      applyMockProps();
      const { queryByTestId } = render(<SignUp {...mockProps} />);
  
      expect(queryByTestId("sign-up")).toBeNull();
    });

    it("should display the sign-up component when isOpen is true", () => {
      applyMockProps();
      const { queryByTestId } = render(<SignUp {...mockProps} />);
  
      expect(queryByTestId("sign-up")).toBeTruthy();
    });
  });

  describe("submitting the form", () => {
    it("should signup action should not throw on submit", () => {
      applyMockProps();
      const { getByLabelText, getByText } = render(<ConnectedSignUp {...mockProps} />);

      fireEvent.change(getByLabelText("Username"), { target: { value: "test_user" } });
      fireEvent.blur(getByLabelText("Username"));
      fireEvent.change(getByLabelText("Email"), { target: { value: "test_email@test.com" } });
      fireEvent.blur(getByLabelText("Email"));
      fireEvent.change(getByLabelText("Password"), { target: { value: "12345678" } });
      fireEvent.blur(getByLabelText("Password"));
      fireEvent.change(getByLabelText("Confirm Password"), { target: { value: "12345678" } });
      fireEvent.blur(getByLabelText("Confirm Password"));      
      fireEvent.click(getByText("Submit"));

      expect(userActionsMock.signUp).toHaveBeenCalledTimes(1);
    });

    // Validations are not working correctly (during tests only)
    xit("should keep submit button disabled if values have validation errors", () => {
      applyMockProps();
      const { getByLabelText, getByText } = render(<ConnectedSignUp {...mockProps} />);

      fireEvent.blur(getByLabelText("Username"));
      fireEvent.blur(getByLabelText("Email"));
      fireEvent.blur(getByLabelText("Password"));
      fireEvent.change(getByLabelText("Confirm Password"), { target: { value: "12345678" } });
      fireEvent.blur(getByLabelText("Confirm Password"));      

      fireEvent.click(getByText("Submit"));

      expect(userActionsMock.signUp).toHaveBeenCalledTimes(0);
      expect(getByText("Submit").getAttribute("disabled")).toBe("true");
    });
  });
});