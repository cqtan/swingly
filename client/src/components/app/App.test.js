import React from 'react';
import ConnectedApp, { App } from './App';
import { render } from "@testing-library/react";
import Root from '../../Root';
import * as mockUserActions from "../../redux/user/user.actions";
import * as mockEventsActions from "../../redux/events/events.actions";

jest.mock("../../redux/user/user.actions", () => {
  return {
    setUsers: jest.fn(() =>  () => Promise.resolve(null)),
    setCurrentUser: jest.fn(() =>  () => Promise.resolve(null)),
  }
});

jest.mock("../../redux/events/events.actions", () => {
  return {
    fetchEvents: jest.fn(() =>  () => Promise.resolve(null)),
  }
});

// jest.mock("../../redux/user/user.actions");
// jest.mock("../../redux/events/events.actions");

describe('App component', () => {
  let mockSnackbar = {
    type: null,
    text: null,
    isOpen: false
  };
  let mockIsLoadingUsers = null;
  let mockIsLoadingEvents = null;
  let mockIsUsersFinishedLoading = null;
  let mockIsEventsFinishedLoading = null;
  let mockProps = null;

  const applyMockProps = () => {
    mockProps = {
      setCurrentUser: jest.fn(),
      setUsers: jest.fn(),
      fetchEvents: jest.fn(),
      snackbar: mockSnackbar,
      isLoadingUsers: mockIsLoadingUsers,
      isLoadingEvents: mockIsLoadingEvents,
      isUsersFinishedLoading: mockIsUsersFinishedLoading,
      isEventsFinishedLoading: mockIsEventsFinishedLoading,
    }
  }

  const renderComponent = () => {
    return render(
      <Root>
        <ConnectedApp {...mockProps} />
      </Root>
    )
  };

  afterEach(() => {
    mockSnackbar = {
      type: null,
      text: null,
      isOpen: false
    };    
    mockIsLoadingUsers = null;
    mockIsLoadingEvents = null;
    mockIsUsersFinishedLoading = null;
    mockIsEventsFinishedLoading = null;

    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should render", () => {
    applyMockProps();
    const renderResult = renderComponent();

    expect(renderResult).toMatchSnapshot();
  });

  it('should call fetchEvents on mount only', async () => {
    applyMockProps();

    await renderComponent();
    
    expect(mockEventsActions.fetchEvents).toHaveBeenCalledTimes(1);
  });

  it('should call setCurrentUser on mount only', async () => {
    applyMockProps();

    await renderComponent();

    expect(mockUserActions.setCurrentUser).toHaveBeenCalledTimes(1);
  });

  it('should render the routes section if either user or event data is not currently loading', () => {
    mockIsLoadingUsers = false;
    mockIsLoadingEvents = false;
    mockIsUsersFinishedLoading = true;
    mockIsEventsFinishedLoading = true;
    applyMockProps();

    const renderResult = render(<Root><App {...mockProps} /></Root>);    
    
    expect(renderResult.queryByTestId("routes-section")).not.toBeNull();
  });

  it("should display the Spinner component while loading", () => {
    applyMockProps();

    const { queryByTestId } = renderComponent();

    expect(queryByTestId("spinner")).not.toBeNull();
  })
});