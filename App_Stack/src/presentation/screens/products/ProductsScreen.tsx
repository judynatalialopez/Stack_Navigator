import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import PrimaryButton from '../../components/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../route/StackNavigator';

const productos = [
  {id: 1, name: 'Chaqueta Jean', price: 59.99, category: 'Ropa'},
  {id: 2, name: 'Tacones', price: 87.99, category: 'Calzado'},
  {id: 3, name: 'Celular Samsung S24 ULTRA', price: 999.99, category: 'Tecnología'},
  {id: 4, name: 'Libro Antes De Diciembre', price: 20.5, category: 'Libros'},
  {
    id: 5,
    name: 'Manilla De Pandora',
    price: 75.75,
    category: 'Accesorios',
  },
  {id: 6, name: 'Televisor Samsung ', price: 140.99, category: 'Tecnología'},
];
const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 20}}>Productos</Text>

      <FlatList
        data={productos}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
              });
            }}
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 20}}>Ajustes</Text>
      <PrimaryButton
        label="Configuración"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};

export default ProductsScreen;
