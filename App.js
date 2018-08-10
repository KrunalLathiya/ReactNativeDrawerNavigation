import { Navigation } from 'react-native-navigation';

import HomeScreen from './screens/HomeScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import SideDrawer from './screens/SideDrawer';

Navigation.registerComponent('drawer.HomeScreen', () => HomeScreen);
Navigation.registerComponent('drawer.SideDrawer', () => SideDrawer);
Navigation.registerComponent('drawer.AnalyticsScreen', () => AnalyticsScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'drawer.HomeScreen',
    title: 'Home'
  }
});