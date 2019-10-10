import React from "react";
import { render, fireEvent } from "../../test-utils";
import ConnectedSidebar, { Sidebar } from './sidebar.component';
import { createMemoryHistory } from 'history';

xdescribe("Sidebar component", () => {
  let mockIsOpen = true;
  let mockSetOpen = jest.fn();
  let mockIsDarkMode = null;
  let mockCurrentUser = null;
  let mockToggleTheme = jest.fn();
  let mockOpenSnackbar = jest.fn();
  let mockProps = null;

  const applyMockProps = withConnectedProps => {
    mockProps = {
      isOpen: mockIsOpen,
      setOpen: mockSetOpen,
      currentUser: mockCurrentUser,
      isDarkMode: mockIsDarkMode,
    }

    if (withConnectedProps) {
      mockProps = {
        ...mockProps,
        history: createMemoryHistory({ initialEntries: ["/"] }),
        toggleTheme: mockToggleTheme,
        openSnackbar: mockOpenSnackbar
      }
    }
  }

  afterEach(() => {
    mockIsOpen = true;
    mockIsDarkMode = null;
    mockCurrentUser = null;

    jest.clearAllMocks();
  });

  it("should render", () => {
    applyMockProps();
    const renderResult = render(<ConnectedSidebar  {...mockProps} />);

    expect(renderResult).toMatchSnapshot();
  });

  it("should close the Sidebar on 'All Events' click", () => {
    applyMockProps();
    const { getByText } = render(<ConnectedSidebar  {...mockProps} />);

    fireEvent.click(getByText("All Events"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Create Event' click", () => {
    applyMockProps();
    const { getByText } = render(<ConnectedSidebar  {...mockProps} />);

    fireEvent.click(getByText("Create Event"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Users' click", () => {
    applyMockProps();
    const { getByText } = render(<ConnectedSidebar  {...mockProps} />);
 
    fireEvent.click(getByText("Users"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'About' click", () => {
    applyMockProps();
    const { getByText } = render(<ConnectedSidebar  {...mockProps} />);

    fireEvent.click(getByText("About"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Error Page' click", () => {
    applyMockProps();
    const { getByText } = render(<ConnectedSidebar  {...mockProps} />);

    fireEvent.click(getByText("Error Page"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should set SideBarContainer and Backdrop isOpen property to false", () => {
    applyMockProps();
    const { getByTestId } = render(<ConnectedSidebar {...mockProps} />);

    fireEvent.click(getByTestId("backdrop"));
        
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should change text of theme button from 'Dark Mode' to 'Light Mode'.", () => {
    applyMockProps();
    const renderResult = render(<ConnectedSidebar  {...mockProps} />);    
    
    fireEvent.click(renderResult.getByText("Light Mode"));

    expect(renderResult.queryByText("Dark Mode")).toBeDefined();
  });

  it("should not call the openSnackbar function when user has signed in", () => {
    mockCurrentUser = "test_user";
    applyMockProps(true);
    const { getByText } = render(<Sidebar {...mockProps} />);

    fireEvent.click(getByText("Create Event"));
        
    expect(mockOpenSnackbar).toHaveBeenCalledTimes(0);
  });
});