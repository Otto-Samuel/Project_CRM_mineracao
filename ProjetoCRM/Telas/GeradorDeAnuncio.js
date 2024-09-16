import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { AnuncioContext } from '../FuncoesDeTela/AnuncioContexto';
import * as ImagePicker from 'expo-image-picker';

export default function GeradorDeAnuncio({ navigation }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0.0);
    const [foto, setFoto] = useState(null);
    const { anuncios, setAnuncios } = useContext(AnuncioContext);

    function GerarAnuncio() {
        const novoAnuncio = { titulo, descricao, quantidade, preco, foto };
        setAnuncios([...anuncios, novoAnuncio]);
        navigation.navigate('TelaInicial');
    }
    const selecionarImagem = async () => {
        var resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!resultado.canceled) {
            setFoto(resultado.uri);
        }
    };
    function ImputDeDados(params) {

    }
    return (
        <View style={styles.container}>
            <View style={styles.caixaParaTexto}>
                <Text style={styles.TextoDoSite}>Digite o Título do Anúncio</Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={setTitulo} />
                <Text style={styles.TextoDoSite}>Digite a Descrição do Anúncio</Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={setDescricao} />
                <Text style={styles.TextoDoSite}>Digite a Quantidade de Produtos</Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={setQuantidade} />
                <Text style={styles.TextoDoSite}>Digite o Preço do Produto</Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={setPreco} />
                <Text style={styles.TextoDoSite}>Envie Fotos do Produto</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={selecionarImagem}>
                        <Image source={require('../Imagens/Icones/icons8-importar-48.png')} style={{ width: 48, height: 48 }} />
                    </TouchableOpacity>
                </View>
                {foto && <Image source={{ uri: foto }} style={{ width: 200, height: 200 }} />}
                <Text></Text>
                <Button title="Publicar" onPress={GerarAnuncio} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'iceblue',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    TextoDoSite: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'icewhite',
        color: 'icewhite',
        margin: 5,
    },
    caixaParaTexto: {
        backgroundColor: 'icegrey',
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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
});