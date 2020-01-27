import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import App from '../screens/app';
import New from '../screens/new';
import LoginMail from '../screens/loginMail';
import LoginSignup from '../screens/loginSignup';
import LoginLogin from '../screens/loginLogin';

const stackLogged = createStackNavigator(
  {
    Feed: App,
    New: New,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

const stackAuth = createStackNavigator(
  {
    Mail: LoginMail,
    Signup: LoginSignup,
    Login: LoginLogin,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

const rootStack = createStackNavigator(
  {
    stackAuth: stackAuth,
    stackLogged: stackLogged,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

const Navigator = createAppContainer(rootStack);

export default Navigator;
