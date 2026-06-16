import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../Components/Perfil';


/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  return (
    <View style={styles.container}>
      
    <Perfil style={styles.tarjetaAzul} nombre="Isabel García" carrera="Ing sistemas" materia ="Programación" cuatri= "9"></Perfil> 
    <Perfil style={styles.tarjetaGris} nombre="Karen Esquivel" carrera="sistemas sin Ing" materia ="Móvil" cuatri= "8"></Perfil> 

    <Perfil style={styles.tarjetaAzul} nombre="Isabel García II" carrera="Ing sistemas" materia ="Programación" cuatri= "9"></Perfil> 
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
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  tarjetaAzul: {
    backgroundColor: "blue",
  },
  tarjetaGris: {
 
    backgroundColor: "gray", 
  },
});
