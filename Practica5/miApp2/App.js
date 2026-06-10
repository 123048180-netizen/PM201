/*Zona 1; aquí importamos todos nuetros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './Components/Saludo';
import {Saludo2} from './Components/Saludo2';
import {Perfil} from './Components/Perfil';

/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  return (
    <View style={styles.container}>
      
    <Perfil nombre="Isabel García" carrera="Ing sistemas" materia ="Programación" cuatri= "9"></Perfil> 
    <Perfil nombre="Karen Esquivel" carrera="sistemas sin Ing" materia ="Móvil" cuatri= "8"></Perfil> 
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
