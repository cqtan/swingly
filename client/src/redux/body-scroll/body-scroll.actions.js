import { BodyScrollType } from './body-scroll.types';

export const setBodyStyles = () => dispatch => {
  const bodyEl = document.body;
  bodyEl.style.top = `-${window.scrollY}px`;
  bodyEl.style.position = 'fixed';
  bodyEl.style.overflowY = 'scroll';
  bodyEl.style.width = `100%`;
  
  dispatch({ 
    type: BodyScrollType.SET_BODY_STYLES
  });
}

export const resetBodyStyles = () => dispatch => {
  const bodyEl = document.body;
  bodyEl.style.position = '';
  bodyEl.style.top = '';
  bodyEl.style.overflowY = '';

  dispatch({
    type: BodyScrollType.RESET_BODY_STYLES
  });
}

export const setScrollPosForPage = pageName => dispatch => {
  dispatch({
    type: BodyScrollType.SET_SCROLL_POS,
    payload: pageName
  });
}

export const saveScrollPosForPage = pageName => dispatch => {
  dispatch({
    type: BodyScrollType.SAVE_SCROLL_POS,
    payload: pageName
  });
}
