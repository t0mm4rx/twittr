import firebase from './firebase';

export function checkMail(mail, callback, errorCallback) {
  firebase
    .auth()
    .fetchSignInMethodsForEmail(mail)
    .then(res => {
      callback(res.length > 0);
    })
    .catch(errorCallback);
}

export function signup(mail, password, name, success, error) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(user => {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(success)
        .catch(error);
    })
    .catch(error);
}

export function signin(mail, password, success, error) {
  firebase
    .auth()
    .signInWithEmailAndPassword(mail, password)
    .then(success)
    .catch(error);
}
