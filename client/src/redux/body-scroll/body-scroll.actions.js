import { BodyScrollType } from './body-scroll.types';

// export const saveScrollTop = (scrollTop) => dispatch => {
//   const bodyEl = document.body;
//   if (bodyEl.clientHeight > window.screen.availHeight && scrollTop >= 0) {
//     bodyEl.style.top = `-${scrollTop}px`;
//     bodyEl.style.position = 'fixed';
//     bodyEl.style.overflowY = 'scroll';
    
//     dispatch({
//       type: BodyScrollType.SAVE_BODY_SCROLL_SUCCESS,
//       payload: scrollTop
//     });
//   } 
// }

// export const setScrollTop = (prevScrollTop) => dispatch => {
//   const bodyEl = document.body;
//   if (bodyEl.clientHeight > window.screen.availHeight && prevScrollTop >= 0) {
//     bodyEl.style.position = '';
//     bodyEl.style.top = '';
//     window.scrollTo(0, parseInt(prevScrollTop));
//     bodyEl.style.overflowY = '';

//     dispatch({
//       type: BodyScrollType.SET_BODY_SCROLL_SUCCESS
//     });
//   } 
// }

// export const resetBodyScroll = () => dispatch => {
//   const bodyEl = document.body;
//   if (document.body.style.position === 'fixed') {
//     bodyEl.style.position = '';
//     bodyEl.style.top = '';
//     bodyEl.style.overflowY = '';
//     dispatch({
//       type: BodyScrollType.RESET_BODY_SCROLL
//     });
//   }
// }

//> > > > > > > > > > 

export const setBodyStyles = () => dispatch => {
  const bodyEl = document.body;
  bodyEl.style.top = `-${window.scrollY}px`;
  bodyEl.style.position = 'fixed';
  bodyEl.style.overflowY = 'scroll';
  
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


