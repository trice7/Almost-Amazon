import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import startApp from './startApp';
import client from './client';

const ViewDirectorBasedOnUserAuthStatus = () => {
  // This line initializes your firebase ass using the info in your .env file
  firebase.initializeApp(client);

  // Below function is used to determine what code to run depending on if the user is signed in or not.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
