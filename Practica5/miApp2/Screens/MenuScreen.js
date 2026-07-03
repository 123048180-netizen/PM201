/*Zona 1; aquí importamos todos nuestros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import TarjetasScreen from './TarjetasScreen';
import Componente1Screen from './Componente1Screen';
import Componente2 from './Componente2'
import ComponentePressed from './ComponentePressed'
import ComponenteSwitch from './ComponenteSwitch'
import Componente3 from './Componente3'
import Componente_Alert from './Componente_Alert'
import SectionList from './SectionList'
import FlatListScreen from './FlatListScreen';
import ComponentesNativosScreen from './ComponentesNativos';

/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  const [screen, setScreen] = useState("Menu");

  const renderScreen = () => {
    switch (screen) {
      case "Tarjetas":
        return <TarjetasScreen />;
      case "Componente1":
        return <Componente1Screen />;
      case "Componente2":
        return <Componente2 />;
      case "ComponentePressed":
        return <ComponentePressed />;
      case "ComponenteSwitch":
        return <ComponenteSwitch />;
      case "Componente3":
        return <Componente3 />;
      case "Componente_Alert":
        return <Componente_Alert />;
      case "FlatListScreen":
        return <FlatListScreen />;
      case "SectionList":
        return <SectionList />;
      case "ComponentesNativos":
        return <ComponentesNativosScreen />;
      default:
        return (
          <View style={styles.container}>
            <Text>Aquí va el menú</Text>
            <Button title="practica Tarjetas" onPress={() => setScreen("Tarjetas")}></Button>
            <Button title="practica Componente1" onPress={() => setScreen("Componente1")}></Button>
            <Button title="practica Componente2" onPress={() => setScreen("Componente2")}></Button>
            <Button title="practica Componente2.1" onPress={() => setScreen("ComponentePressed")}></Button>
            <Button title="practica Componente2.2" onPress={() => setScreen("ComponenteSwitch")}></Button>
            <Button title="practica Componente2.1" onPress={() => setScreen("Componente3")}></Button>
            <Button title="practica Componente2.2" onPress={() => setScreen("Componente_Alert")}></Button>
            <Button title="practica Componente FlatList" onPress={() => setScreen("FlatListScreen")}></Button>
            <Button title="practica Componente SectionList" onPress={() => setScreen("SectionList")}></Button>
            <Button title="practica Componentes Nativos" onPress={() => setScreen("ComponentesNativos")}></Button>
          </View>
        );
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <StatusBar style="auto" />
        {renderScreen()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/*Aqui irán los estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fabef1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 2,
    margin: 2
  },
  botones: {
    backgroundColor: '#f705d3',
    margin: 2,
    padding: 2,
  }
});