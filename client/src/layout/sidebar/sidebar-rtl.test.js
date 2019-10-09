import React from "react";
import { render, fireEvent } from "../../test-utils";
import ConnectedSidebar, { Sidebar } from './sidebar.component';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';

xdescribe("Sidebar component", () => {
  let mockIsOpen = true;
  let mockSetOpen = jest.fn();
  let mockToggleTheme = jest.fn();
  let mockIsDarkMode = null;
  let mockCurrentUser = null;
  let mockOpenSnackbar = jest.fn();
  let mockInitialEntries = "/";
  

  // TODO: Use Connected and check if text changed
  const renderComponent = () => {
    const mockHistory = createMemoryHistory({ initialEntries: [mockInitialEntries] });

    const mockProps = {
      isOpen: mockIsOpen,
      setOpen: mockSetOpen,
      toggleTheme: mockToggleTheme,
      currentUser: mockCurrentUser,
      isDarkMode: mockIsDarkMode,
      openSnackbar: mockOpenSnackbar,
      history: mockHistory
    }

    return render(<ConnectedSidebar {...mockProps} />);
  };

  afterEach(() => {
    mockIsOpen = true;
    mockIsDarkMode = null;
    mockCurrentUser = null;
    mockInitialEntries = "/";

    jest.clearAllMocks();
  });

  it("should render", () => {
    const renderResult = renderComponent();

    expect(renderResult).toMatchSnapshot();
  });

  it("should close the Sidebar on 'All Events' click", () => {
    const renderResult = renderComponent();

    fireEvent.click(renderResult.getByText("All Events"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Create Event' click", () => {
    const renderResult = renderComponent();

    fireEvent.click(renderResult.getByText("Create Event"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Users' click", () => {
    const renderResult = renderComponent();
 
    fireEvent.click(renderResult.getByText("Users"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'About' click", () => {
    const renderResult = renderComponent();

    fireEvent.click(renderResult.getByText("About"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Error Page' click", () => {
    const renderResult = renderComponent();

    fireEvent.click(renderResult.getByText("Error Page"));

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should call the toggleTheme function", () => {
    mockIsDarkMode = true;
    const renderResult = renderComponent();

    fireEvent.click(renderResult.getByText("Light Mode"));

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("should set SideBarContainer and Backdrop isOpen property to false", () => {
    const renderResult = renderComponent();

    const sidebarContainer = renderResult.getByTestId("sidebar-container");
    const backdrop = renderResult.getByTestId("backdrop");
    fireEvent.click(backdrop);
        
    expect(backdrop.getAttribute("isOpen")).toBe(false);
    expect(sidebarContainer.getAttribute("isOpen")).toBe(false);
  });


});