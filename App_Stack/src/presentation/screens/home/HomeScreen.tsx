import {Pressable, Text, View} from "react-native";
import { globalStyles } from "../../theme/Theme";
import { useNavigation } from "@react-navigation/native";

const HomeScren = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Pressable style={globalStyles.primaryButton} onPress={() => navigation.navigate('Products' as never)}>
            <Text style={globalStyles.buttonText}>Productos</Text>
            </Pressable>
        </View>
    )
}

export default HomeScren;