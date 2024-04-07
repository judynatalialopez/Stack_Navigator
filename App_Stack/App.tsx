import {Text, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/presentation/route/StackNavigator";

const App = () => {
    return (
        <NavigationContainer>
            {/*<Text>App</Text>*/}
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default App;