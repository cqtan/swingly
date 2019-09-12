import { BodyScrollType } from './body-scroll.types';

export const setBodyScroll = (prev, scrollTop) => dispatch => {
  if (prev === null) {
    dispatch({
      type: BodyScrollType.SET_BODY_SCROLL_SUCCESS,
      payload: scrollTop
    });
  } else {
    console.log('Scroll top already set!');
  }
}