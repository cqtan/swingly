import { EventEditActionTypes } from './event-edit.types';

const initialState = {
  event: null,
  lastRoute: null,
  scrollPos: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EventEditActionTypes.EDIT_PAGE_OPEN:
      return {
        ...action.payload,
      }
    case EventEditActionTypes.EDIT_PAGE_SET_SCROLLPOS:
      return {
        ...state,
        scrollPos: action.payload
      }
    case EventEditActionTypes.EDIT_PAGE_CLEAN_UP:
      return {
        ...initialState,
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;