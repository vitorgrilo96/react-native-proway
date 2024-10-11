import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Produto } from './components/Produto';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const produtos = [
    {
      id: 'e2dcc058-8334-4fcb-b81f-ac7692e596',
      preco: '100',
      avatarUrl: '337580.webp',
      categoria: 'eletronicos',
      nome: 'Nokia tijolão',
    },
    {
      id: 'e2dcc058-8334-4fcb-b81c9e7692e231',
      preco: '9.000',
      avatarUrl: 'geladeira.jpg',
      categoria: 'eletronicos',
      nome: 'Geladeira brastemp',
    },
    {
      id: 'e2dcc058-8334-4fcb--ac9e7692e100',
      preco: '600',
      avatarUrl: 'grill_10png',
      categoria: 'eletronicos',
      nome: 'Forninho'
    },
    {
      id: 'e2058-8334-4fcb-b81c9e7692e231',
      preco: '900',
      avatarUrl: 'adidas.webp',
      categoria: 'roupas',
      nome: 'Blusa adidas',
    },
    {
      id: 'e2dcc04-4fcb--ac9e7692e100',
      preco: '900',
      avatarUrl: 'nike.jpg',
      categoria: 'roupas',
      nome: 'Blusa nike'
    },
    {
      id: 'e2dcc058-7692e596',
      preco: '400.000',
      avatarUrl: 'dodge.webp',
      categoria: 'carros',
      nome: 'Dodge',
    },
    {
      id: 'e2dc692e231',
      preco: '200.000',
      avatarUrl: 'creta.webp',
      categoria: 'carros',
      nome: 'Creta',
    },
    {
      id: 'e2100',
      preco: '300.000',
      avatarUrl: 'volvo.jpg',
      categoria: 'carros',
      nome: 'Volvo'
    }
  ];

  return (
    <View style={styles.container}>
      <Produto avatarUrl="https://tm.ibxk.com.br/2022/07/11/11093357990127.jpg" />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="Escolha o tipo de produto" value="EscolherProduto" />
          <Picker.Item label="Eletrônicos" value="eletronicos" />
          <Picker.Item label="Roupas" value="roupas" />
          <Picker.Item label="Carros" value="carros" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
});
