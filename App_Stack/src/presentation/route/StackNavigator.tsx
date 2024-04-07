import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ProductsScreen from '../screens/products/ProductsScreen.tsx';
import SettingsScreen from '../screens/settings/SettingsScreen.tsx';
import ProductScreen from '../screens/products/ProductScreen.tsx';

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string; price: number; category: string};
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
