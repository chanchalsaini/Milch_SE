import { RECEIVE_POSTS } from '../actions/types'

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default posts;