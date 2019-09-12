import { BodyScrollType } from './body-scroll.types';

const INITIAL_STATE = {
  scrollTop: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BodyScrollType.SET_BODY_SCROLL_SUCCESS:
      return {
        scrollTop: action.payload
      }
    case BodyScrollType.SET_BODY_SCROLL_FAILED:
      return {
        scrollTop: null
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;