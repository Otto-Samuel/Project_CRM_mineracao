import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function Anuncio({ route }) {
    const { anuncio } = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>{anuncio.titulo}</Text>
                <Text style={styles.precoProduto}>R$ {anuncio.preco}</Text>
                <Text style={styles.descricaoDeTexto}>{anuncio.descricao}</Text>
                <Text></Text>
                
            </View>
            <View style={styles.containerCompra}>
            <Text>quantidade: {anuncio.quantidade}</Text>
            <Button title='Comprar' style={styles.configuracaoBotao}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#iceblue',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    containerCompra: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
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
    titulo: {
        color: 'black',
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'top',
        shadowColor: '#000',
    },
    descricaoDeTexto: {
        color: 'black',
        fontSize: 28,
        textAlign: 'top',
        shadowColor: '#000',
    },
    precoProduto: {
        color: 'lightred',
        fontSize: 30,
        textAlign: 'top',
        fontWeight: 'bold',
    },
    quantidadeProduto: {
        color: 'black',
        fontSize: 25,
        textAlign: 'top',
        fontWeight: 'bold',
    },
    configuracaoBotao: {
        color: 'red',
        fontSize: 20,
        textAlign: '45%',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
    },

});