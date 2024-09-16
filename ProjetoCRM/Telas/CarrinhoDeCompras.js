import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function CarrinhoDeCompras() {
    const[email,SetEmail] = useState("")
    const[senha,SetSenha] = useState("")
    const[resposta,setResposta] = useState()
    
    return (
        <View style={styles.container}>
            <View style={styles.caixaParaTexto}>
                <Text>Login</Text>
                <Text></Text>
                <Text></Text>
                <Text>Digite seu email</Text>
                <Text></Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={SetEmail}></TextInput>
                <Text></Text>
                
                <Text>Digite sua senha</Text>
                <Text></Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={SetSenha}></TextInput>
                <Text>{resposta}</Text>
                <Button title='Comprar'></Button>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#23272E',
      backgroundGradient: 'linear-gradient(180deg, #23272E 0%, #121622 100%)', 
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }, 
    caixaParaTexto: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        width: '30%',
      },
      InputeDeTexto: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
  });