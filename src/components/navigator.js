import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import App from './App';
import New from './new';

const Navigator = createAppContainer(
  createStackNavigator(
    {
      Feed: App,
      New: New,
    },
    {
      header: null,
      headerMode: 'none',
    },
  ),
);

export default Navigator;
