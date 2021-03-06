import {
  HANDLE_COMMON
} from 'actionType'

const init = {
  test: "hello world"
}

export default (state = init, action) => {
  switch (action.type) {
    case HANDLE_COMMON:
      return {
        ...state, ...action.payload
      };
    default:
      return state
  }
}