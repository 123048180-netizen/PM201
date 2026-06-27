/*Zona 1; aquí importamos todos nuetros recursos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Registro from './Screens/Registro';


/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {
  return (
   <View>
    <Registro />
    
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
