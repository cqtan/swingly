import { BodyScrollType } from './body-scroll.types';

export const saveScrollTop = (scrollTop) => dispatch => {
  const bodyEl = document.body;
  if (bodyEl.clientHeight > window.screen.availHeight && scrollTop >= 0) {
    bodyEl.style.top = `-${scrollTop}px`;
    bodyEl.style.position = 'fixed';
    bodyEl.style.overflowY = 'scroll';
    
    dispatch({
      type: BodyScrollType.SAVE_BODY_SCROLL_SUCCESS,
      payload: scrollTop
    });
  } 
}

export const setScrollTop = (prevScrollTop) => dispatch => {
  const bodyEl = document.body;
  if (bodyEl.clientHeight > window.screen.availHeight && prevScrollTop >= 0) {
    bodyEl.style.position = '';
    bodyEl.style.top = '';
    window.scrollTo(0, parseInt(prevScrollTop));
    bodyEl.style.overflowY = '';

    dispatch({
      type: BodyScrollType.SET_BODY_SCROLL_SUCCESS
    });
  } 
}