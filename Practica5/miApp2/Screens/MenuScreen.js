/*Zona 1; aquí importamos todos nuestros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";

import TarjetasScreen from './TarjetasScreen';
import Componente1Screen from './Componente1Screen';
import Componente2 from './Componente2';
import ComponentePressed from './ComponentePressed';
import ComponenteSwitch from './ComponenteSwitch';
import Componente3 from './Componente3';
import Componente_Alert from './Componente_Alert';
import SectionList from './SectionList';
import FlatListScreen from './FlatListScreen';
import ComponentesNativosScreen from './ComponentesNativos';
import Componente1 from './Componente1';// Cambia a ./Screens/Componente1 si lo moviste

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

      case "PracticaModal":
        return <Componente1 />;

      default:
        return (
          <View style={styles.container}>
            <Text style={{ marginBottom: 15, fontSize: 20, fontWeight: 'bold' }}>
              Aquí va el menú
            </Text>

            <Button
              title="Práctica Tarjetas"
              onPress={() => setScreen("Tarjetas")}
            />

            <Button
              title="Práctica Componente1"
              onPress={() => setScreen("Componente1")}
            />

            <Button
              title="Práctica Componente2"
              onPress={() => setScreen("Componente2")}
            />

            <Button
              title="Práctica ComponentePressed"
              onPress={() => setScreen("ComponentePressed")}
            />

            <Button
              title="Práctica ComponenteSwitch"
              onPress={() => setScreen("ComponenteSwitch")}
            />

            <Button
              title="Práctica Componente3"
              onPress={() => setScreen("Componente3")}
            />

            <Button
              title="Práctica Componente Alert"
              onPress={() => setScreen("Componente_Alert")}
            />

            <Button
              title="Práctica FlatList"
              onPress={() => setScreen("FlatListScreen")}
            />

            <Button
              title="Práctica SectionList"
              onPress={() => setScreen("SectionList")}
            />

            <Button
              title="Práctica Componentes Nativos"
              onPress={() => setScreen("ComponentesNativos")}
            />

            <Button
              title="Práctica Modal"
              onPress={() => setScreen("PracticaModal")}
            />
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

/*Aquí irán los estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fabef1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 8,
  },
});