import firebase from '../utils/firebase';
import 'firebase/firestore';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POSTS';

export function getPosts(dispatch) {
  return dispatch => {
    firebase
      .firestore()
      .collection('/posts')
      .orderBy('timestamp', 'desc')
      .get()
      .then(value => {
        let result = [];
        value.docs.forEach(item =>
          result.push({...item.data(), ...{key: item.id}}),
        );
        return dispatch({
          type: GET_POSTS,
          payload: result,
        });
      });
  };
}

export function addPost(message, author, userId) {
	console.log(userId);
  return dispatch => {
    firebase
      .firestore()
      .collection('/posts')
      .add({
        author: author,
        content: message,
		userId: userId,
        timestamp: Date.now(),
      });
    return dispatch({
      type: ADD_POST,
    });
  };
}
