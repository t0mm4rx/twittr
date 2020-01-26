import firebase from './firebase';

export function checkMail(mail, callback, errorCallback) {
	firebase
    .auth()
    .fetchSignInMethodsForEmail(mail)
    .then(res => {
      callback(res.length > 0);
  }).catch(errorCallback);
}

export function signup(mail, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(res => {
      console.log(res);
    });
}
