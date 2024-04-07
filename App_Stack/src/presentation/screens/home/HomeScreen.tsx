import * as React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';
import {type RootStackParams} from '../../route/StackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products')}
      />

      <PrimaryButton
        label="Configuración"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
