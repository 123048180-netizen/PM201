/*Zona 1; aquí importamos todos nuetros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './Components/Saludo';
import {Saludo2} from './Components/Saludo2';

/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo; React Native</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Text>****************************************</Text>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      
      <StatusBar style="auto" />
    </View>
  );
}
/*Aqui irán los estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
