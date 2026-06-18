/*Zona 1; aquí importamos todos nuetros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
<<<<<<< Updated upstream
import MenuScreen from './Screens/MenuScreen';

=======
import { Saludo } from './Components/Saludo';
import {Saludo2} from './Components/Saludo2';
import {Perfil} from '.Components/Perfil'
>>>>>>> Stashed changes

/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  return (
<<<<<<< Updated upstream
   <View>
    <MenuScreen />
    
=======
    <View style={styles.container}>
     
      
      <Perfil nombre = "Isabel" carrera="Ing sistemas" materia = "Móvil" cuatri ="9"></Perfil>
      <Perfil nombre = "Bjork" carrera="Ing" materia = "POO" cuatri ="9"></Perfil>

      <StatusBar style="auto" />
>>>>>>> Stashed changes
    </View>
  );
}
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
