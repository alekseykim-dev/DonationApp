import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import SingleCoffeeShop from '../screens/SingleDonationItem/SingleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';


const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleCoffeeShop}
        component={SingleCoffeeShop}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
