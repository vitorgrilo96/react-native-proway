import { Image, StyleSheet, Text, View } from "react-native";

export function Produto(props) {
    return (
        <View>
            <Text style={styles.nome}>Nokia tijolão</Text>
            <Image style={styles.avatar} source={{ uri: props.avatarUrl }} />
            <Text style={styles.preco}>100 R$</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      marginBottom: 16,
    },
    avatar: {
      height: 135,
      width: 135,
      borderRadius: 25,
      backgroundColor: '#ccc',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 8,
      marginBottom: 16,
    },
    nome: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    preco: {
        fontSize: 20,
        color: 'blue',
    },
})