import { BodyScrollType } from './body-scroll.types';

const INITIAL_STATE = {};
const blackList = ["eventEditPage"];

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BodyScrollType.SAVE_SCROLL_POS:      
      if (state[action.payload]) {
        return { ...state };
      } else {
        return {
          ...state,
          [action.payload]: window.scrollY
        };
      }
    case BodyScrollType.SET_SCROLL_POS:
      if (state[action.payload] && !blackList.includes(action.payload)) {
        window.scrollTo(0, state[action.payload]);
      } else {
        window.scrollTo(0, 0);
      }
      return {
        ...state,
        [action.payload]: null
      }
    case BodyScrollType.SET_BODY_STYLES:
    case BodyScrollType.RESET_BODY_STYLES:
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;