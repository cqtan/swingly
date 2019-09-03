import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/root-reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars,
  faSyncAlt,
  faUserCircle,
  faEdit,
  faUserSlash,
  faSignOutAlt,
  faSignInAlt,
  faHome,
  faCalendar,
  faCalendarDay,
  faCalendarWeek,
  faEllipsisV,
  faCalendarPlus,
  faHatWizard,
  faMoon,
  faSun,
  faChevronLeft,
  faTimes,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import ThemeManager from './themes/ThemeManager';

export default (props) => {
  const { children, initialState = {} } = props;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  const persistor = persistStore(store);

  library.add(
    faBars,
    faSyncAlt,
    faUserCircle,
    faEdit,
    faUserSlash,
    faSignOutAlt,
    faSignInAlt,
    faHome,
    faCalendar,
    faCalendarDay,
    faCalendarWeek,
    faEllipsisV,
    faCalendarPlus,
    faHatWizard,
    faMoon,
    faSun,
    faChevronLeft,
    faTimes,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faCheckCircle
  );

  return (
    <>
      { process.env.NODE_ENV !== 'test' ? 
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <ThemeManager>
                {children}
              </ThemeManager>
            </BrowserRouter>
          </PersistGate>
        </Provider> : 
        <Provider store={store}>
          <BrowserRouter>
            <ThemeManager>
              {children}
            </ThemeManager>
          </BrowserRouter>
        </Provider>
      }
    </>
  );
}