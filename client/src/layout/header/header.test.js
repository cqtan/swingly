import React from 'react';
import { render, fireEvent } from "../../test-utils";
import ConnectedHeader, { Header } from './header.component.jsx';
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';

describe('Header', () => {
  let currentUserMock = null;
  let initialEntries = "/";
  let mockProps = null;

  const applyMockProps = () => {
    mockProps = {
      currentUser: currentUserMock,
      history: createMemoryHistory({ initialEntries: [initialEntries] })
    }
  }

  afterEach(() => {
    currentUserMock = null;
    initialEntries = "/";
    jest.clearAllMocks();
  });

  it('should render the Header', () => {
    applyMockProps();
    const renderResult = render(<Header {...mockProps} />)

    expect(renderResult).toMatchSnapshot();
  });

  describe("Header left button", () => {
    it("should display the navigation Button instead", () => {
      applyMockProps();
      const { container } = render(<ConnectedHeader {...mockProps} />);
      expect(container.querySelector("[aria-label='navigation button']")).toBeTruthy();
    });

    it("should display a 'Back' Button instead of navigation button", () => {
      initialEntries = "/profile";
      applyMockProps();
      const { queryByText } = render(
        <MemoryRouter initialEntries={[initialEntries]}>
          <ConnectedHeader {...mockProps} />
        </MemoryRouter>
      );
      
      expect(queryByText("Back")).toBeTruthy();
    });

    it("should not display a 'Back' Button if user matches url query", () => {
      currentUserMock = "test_user";
      initialEntries = "/profile?user_id=test_user";
      applyMockProps();
      const { queryByText } = render(
        <MemoryRouter initialEntries={[initialEntries]}>
          <Header {...mockProps} />
        </MemoryRouter>
      );
      
      expect(queryByText("Back")).toBeFalsy();
    });

    it("should display a 'Events' Button instead of navigation button", () => {
      initialEntries = "/event-edit";
      applyMockProps();
      const { getByText } = render(
        <MemoryRouter initialEntries={[initialEntries]}>
          <ConnectedHeader {...mockProps} />
        </MemoryRouter>
      );
      
      expect(getByText("Events")).toBeTruthy();
    });

    it("should set navigation state to open on navigation button click", () => {
      applyMockProps();
      const { container } = render(<ConnectedHeader {...mockProps} />);
      const navigationButton = container.querySelector("[aria-label='navigation button']");

      fireEvent.click(navigationButton);

      expect(navigationButton.getAttribute("aria-expanded")).toBe("true");
    });
  });

  describe("Header right button", () => {
    it('should not render the ProfileImage component if user has not signed in.', () => {
      applyMockProps();
      const { queryByAltText } = render(<ConnectedHeader {...mockProps} />);
  
      expect(queryByAltText("profile image")).toBeNull();
    });

    it('should render the ProfileImage component if user has signed in.', () => {
      currentUserMock = "test_user";
      applyMockProps();
      const { getByAltText } = render(<Header {...mockProps} />);
  
      expect(getByAltText("profile image")).toBeTruthy();
    });

    it("should display the Sign in component on click if user has not signed in", () => {
      applyMockProps();
      const { container, queryByTestId } = render(<Header {...mockProps} />);
      const profileButton = container.querySelector("[aria-label='profile button']");

      fireEvent.click(profileButton);

      expect(queryByTestId("sign-in")).toBeTruthy();
    });

    it("should not display the Sign in component on click if user is signed in", () => {
      currentUserMock = "test_user";
      applyMockProps();
      const { container, queryByTestId } = render(<Header {...mockProps} />);
      const profileButton = container.querySelector("[aria-label='profile button']");

      fireEvent.click(profileButton);

      expect(queryByTestId("sign-in")).toBeFalsy();
    });

    it("should display the register component", () => {
      applyMockProps();
      const { container, queryByTestId, getByText } = render(<Header {...mockProps} />);
      const profileButton = container.querySelector("[aria-label='profile button']"); 

      fireEvent.click(profileButton);
      fireEvent.click(getByText("Register"));

      expect(queryByTestId("sign-up")).toBeTruthy();
    });

    it("should sign-up components on backdrop click", () => {
      applyMockProps();
      const { container, queryByTestId, getByTestId } = render(<Header {...mockProps} />);
      const profileButton = container.querySelector("[aria-label='profile button']"); 

      fireEvent.click(profileButton);
      fireEvent.click(getByTestId("backdrop"));

      expect(queryByTestId("sign-up")).toBeFalsy();
    });
  });
});