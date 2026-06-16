/*Zona 1; aquí importamos todos nuetros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, {useState} from "react";
import TarjetasScreen from './TarjetasScreen';
import Componente1Screen from './Componente1Screen';


/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
    const [screen, setScreen] = useState("Menu");
        switch (screen) {
            case "Tarjetas":
                return <TarjetasScreen />;
            case "Componente1":
                return <Componente1Screen />;
            case "menu":
            default:
  return (
   <View>
    <Text>Aquí va la primer Practica de Componentes Nativos</Text>
    <Button title="practica Tarjetas" onPress={() => setScreen("Tarjetas")}></Button>
    <Button title="practica Componente1" onPress={() => setScreen("Componente1")}></Button>

   </View>
  ); //return
} //Switch
} //App
/*Aqui irán los estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  
});
