import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Produto } from './components/Produto';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const produtos = [
    {
      id: 'e2dcc058-8334-4fcb-b81f-ac7692e596',
      preco: 100,
      avatarUrl: 'https://cdn.phonemore.com/content/2013/jpg/985.jpg',
      categoria: 'eletronicos',
      nome: 'Nokia tijolão',
      estoque: true,
    },
    {
      id: 'e2dcc058-8334-4fcb-b81c9e7692e231',
      preco: 9000,
      avatarUrl: 'https://brastemp.vtexassets.com/arquivos/ids/244365-500-500?v=638520854620900000&width=500&height=500&aspect=true',
      categoria: 'eletronicos',
      nome: 'Geladeira brastemp',
      estoque: true,
    },
    {
      id: 'e2dcc058-8334-4fcb--ac9e7692e100',
      preco: 600,
      avatarUrl: 'https://m.media-amazon.com/images/I/71vQE+oNHHL._AC_SL1500_.jpg',
      categoria: 'eletronicos',
      nome: 'Forninho',
      estoque: true,
    },
    {
      id: 'e2058-8334-4fcb-b81c9e7692e231',
      preco: 900,
      avatarUrl: 'https://i.ebayimg.com/images/g/~CwAAOSwkxVkQ9o2/s-l1600.webp',
      categoria: 'roupas',
      nome: 'Blusa adidas',
      estoque: false,
    },
    {
      id: 'e2dcc04-4fcb--ac9e7692e100',
      preco: 900,
      avatarUrl: 'https://acdn.mitiendanube.com/stores/004/010/775/products/img_7995-86240ae979e0a4848617018807878915-480-0.webp',
      categoria: 'roupas',
      nome: 'Blusa nike',
      estoque: true,
    },
    {
      id: 'e2dcc058-7692e596',
      preco: 400000,
      avatarUrl: 'https://www.bennacdjr.com/blogs/3639/wp-content/uploads/2023/08/2021-durango-srt-hellcat_full-view-web-1024x625.webp',
      categoria: 'carros',
      nome: 'Dodge',
      estoque: true,
    },
    {
      id: 'e2dc692e231',
      preco: 200000,
      avatarUrl: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210203035701_Hyundai_Creta_2020_showroom_1200_c.jpg&w=700&c=1',
      categoria: 'carros',
      nome: 'Creta',
      estoque: true,
    },
    {
      id: 'e2100',
      preco: 300000,
      avatarUrl: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/09/volvo-ex90-concept-2820435.jpg?tf=1080x',
      categoria: 'carros',
      nome: 'Volvo',
      estoque: false,
    }
  ];

  const [filtros, setFiltros] = useState({
    nome: '',
    precoMin: '',
    precoMax: '',
    estoque: false,
    categoria: '',
  });

  const produtosFiltrados = produtos
    .filter(produto => produto.nome.toUpperCase().includes(filtros.nome.toUpperCase()))
    .filter(produto => produto.preco >= Number(filtros.precoMin))
    .filter(produto => !filtros.precoMax || produto.preco <= Number(filtros.precoMax))
    .filter(produto => produto.categoria.toUpperCase().includes(filtros.categoria.toUpperCase()))
    .filter(produto => !filtros.estoque || produto.estoque);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={filtros.nome}
          onChangeText={texto => setFiltros({
            ...filtros,
            nome: texto
          })}
          style={styles.input}
          placeholder="buscar pelo nome"
        />
      </View>

      <View style={styles.containerInput}>
      <TextInput
        value={filtros.precoMin}
        onChangeText={texto => setFiltros({
          ...filtros,
          precoMin: texto
        })}
        style={styles.input}
          placeholder="coloque um preço minimo (rico)"
      />
      </View>

      <View style={styles.containerInput}>
      <TextInput
        value={filtros.precoMax}
        onChangeText={texto => setFiltros({
          ...filtros,
          precoMax: texto
        })}
        style={styles.input}
          placeholder="coloque um preço máximo (pobre)"
      />
      </View>

      <View style={styles.containerInput}>
      <TextInput
        value={filtros.categoria}
        onChangeText={texto => setFiltros({
          ...filtros,
          categoria: texto
        })}
        style={styles.input}
          placeholder="escolha o tipo de produto"
      />
     </View>

      <View style={styles.estoque}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => setFiltros({
            ...filtros,
            estoque: value
          })}
          value={filtros.estoque}
        />
        <Text>excluir os fora de estoque</Text>
      </View>

      <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => <Produto {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    allingItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  switchLabel: {
    marginRight: 10,
    fontSize: 16,
    color: 'dimgray',
  },

  listContainer: {
    paddingBottom: 16,
    width: '100%',
  },

  produtoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 8,
    padding: 16,
    alignItems: 'center',
  },

  produtoImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },

  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'dimgray',
  },

  produtoPreco: {
    fontSize: 16,
    color: 'gray',
  },

  produtoCategoria: {
    fontSize: 14,
    color: 'lightgray',
  },
  input: {
    outline: 'none',
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff'
  },
  estoque: {
    alignItems: "center",
    flexDirection: "row",
  }
});
