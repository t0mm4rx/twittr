import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import App from '../screens/app';
import New from '../screens/new';
import LoginMail from '../screens/loginMail';

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
