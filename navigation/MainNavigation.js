import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Login from '../Screens/Login/Login';
import Registration from '../Screens/Registration/Registration';
import SingleDonationItem from '../Screens/SingleDonationItem/SingleDonationItem';
import {Routes} from './Routes';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
