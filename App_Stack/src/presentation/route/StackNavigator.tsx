import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScren from '../screens/home/HomeScreen';
import productScreen from "../screens/products/productScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScren} />
      <Stack.Screen name="Products" component={productScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}   

export default StackNavigator;