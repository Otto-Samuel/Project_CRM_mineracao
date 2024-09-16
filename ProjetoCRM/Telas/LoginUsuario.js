import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { EmailUsuario, SenhaUsuario } from '../FuncoesDeTela/Login';

export default function LoginUsuario({ navigation }) {
    const [email, SetEmail] = useState("")
    const [senha, SetSenha] = useState("")
    const [criarConta, setCriarConta] = useState(false)
    const [resposta, setResposta] = useState("")
    function ExecutarLogin() {
        var emailValidacao = EmailUsuario(email);
        var senhaValidacao = SenhaUsuario(senha);

        if (emailValidacao !== "email valido" || senhaValidacao !== "senha valida") {
            setResposta(` ${emailValidacao} - ${senhaValidacao}`);
        } else {
            setResposta("falha ao logar");
            navigation.navigate('TelaInicial');
        }
        if (criarConta) {
            setResposta("Conta criada com sucesso.");
            navigation.navigate('TelaInicial');
        } else {
            setResposta("Login realizado com sucesso.");
            navigation.navigate('TelaInicial');
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.caixaParaTexto}>

                <Text style={styles.TextoDoSite}>{criarConta ? "Criar Conta" : "Login"}</Text>
                <Text style={styles.TextoDoSite}>Digite seu email</Text>
                <TextInput style={styles.InputeDeTexto} onChangeText={SetEmail}></TextInput>

                <Text style={styles.TextoDoSite}>Digite sua senha</Text>
                <TextInput style={styles.InputeDeTexto} secureTextEntry={true} onChangeText={SetSenha}></TextInput>
                <Text style={styles.TextoDoSite}>{resposta}</Text>
                <TouchableOpacity onPress={() => setCriarConta(!criarConta)}>
                    <Text style={styles.TextoDoSite}>
                        {criarConta ? "Ja possui conta?" : "Sem conta?"}
                    </Text>
                </TouchableOpacity>
                <Button title='Continuar' onPress={ExecutarLogin}></Button>
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
    TextoDoSite: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'icewhite',
        color: 'icewhite',
        margin: 10,
    },
});