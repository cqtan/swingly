import { BodyScrollType } from './body-scroll.types';

const INITIAL_STATE = {
  scrollTop: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BodyScrollType.SAVE_BODY_SCROLL_SUCCESS:
      return {
        scrollTop: action.payload
      }
    case BodyScrollType.SET_BODY_SCROLL_SUCCESS:
      return {
        scrollTop: 0
      }
    case BodyScrollType.SAVE_BODY_SCROLL_FAILED:
    case BodyScrollType.SET_BODY_SCROLL_FAILED:
      return {
        scrollTop: 0
      }
    case BodyScrollType.RESET_BODY_SCROLL:
      return {
        ...INITIAL_STATE
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;