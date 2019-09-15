import { EventEditActionTypes } from './event-edit.types';

const initialState = {
  event: null,
  currentRoute: null,
  scrollPos: null,
  viewType: null,
  history: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EventEditActionTypes.EDIT_PAGE_OPEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null
      }
    case EventEditActionTypes.EDIT_PAGE_OPEN_FAILED:
      return {
        ...initialState,
        error: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;