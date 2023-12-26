import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../Screens/Home/Home';
import SingleCoffeeShop from '../Screens/SingleCoffeeshop/SingleCoffeeshop';
import Login from '../Screens/Login/Login';
import Registration from '../Screens/Registration/Registration';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      {/* <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} /> */}
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleCoffeeShop}
        component={SingleCoffeeShop}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
