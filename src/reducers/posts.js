import {GET_POSTS} from '../actions/posts';

const initialState = {posts: []};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
