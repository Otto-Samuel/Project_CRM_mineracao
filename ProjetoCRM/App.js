import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AnuncioProvider } from './FuncoesDeTela/AnuncioContexto';

import TelaInicial from './Telas/TelaInicial';
import GeradorDeAnuncio from './Telas/GeradorDeAnuncio';
import LoginUsuario from './Telas/LoginUsuario';
import CarrinhoDeCompras from './Telas/CarrinhoDeCompras';
import Anuncio from './Telas/Anuncio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AnuncioProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Inicial">
          <Stack.Screen name="Tela Inicial" component={TelaInicial} />
          <Stack.Screen name="CriarAnuncio" component={GeradorDeAnuncio} />
          <Stack.Screen name="Login" component={LoginUsuario} />
          <Stack.Screen name="Carrinho" component={CarrinhoDeCompras} />
          <Stack.Screen name="Anuncio" component={Anuncio} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnuncioProvider>
  );
}
