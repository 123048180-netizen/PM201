import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Switch,Pressable } from 'react-native';
import { useState } from 'react';
import { TarjetaPlatillo } from '../Components/TarjetaPlatillo';
import { TextInput } from 'react-native-web';


/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function Platillos() {

    const [observacion, setObservación]=useState("");
    const [Megusta, setMegusta]=useState(false);
    const [Megusta1, setMegusta1]=useState(false);
    const [Megusta2, setMegusta2]=useState(false);

  return (
    <View>
    <TarjetaPlatillo style = {estilos.container} nombre="Chilaquiles" precio="85" paisOrigen="Mexico">
     </TarjetaPlatillo> <TextInput value=''
    placeholder='Escribe tu observación'></TextInput>
    <Switch
    value={Megusta}
    onValueChange={setMegusta}                
    trackColor={{false: '#767577', true: '#81b0ff'  }}  
    thumbColor={Megusta ? '#2196F3': '#f4f3f4' } 
                />
    <Pressable></Pressable>

    <TarjetaPlatillo style = {estilos.container}  nombre="Enchiladas" precio="90" paisOrigen="Mexico">
    </TarjetaPlatillo> <TextInput 
    placeholder='Escribe tu observación'></TextInput>
    <Switch
    value={Megusta1}
    onValueChange={setMegusta1}                
    trackColor={{false: '#767577', true: '#81b0ff'  }}  
    thumbColor={Megusta ? '#2196F3': '#f4f3f4' } 
                />


    <TarjetaPlatillo style = {estilos.container} nombre="Mole" precio="100" paisOrigen="Mexico">
    </TarjetaPlatillo>  <TextInput value=''
    placeholder='Escribe tu observación'></TextInput>
     <Switch
    value={Megusta2}
    onValueChange={setMegusta2}                
    trackColor={{false: '#767577', true: '#81b0ff'  }}  
    thumbColor={Megusta ? '#2196F3': '#f4f3f4' } 
                /> 
      <StatusBar style="auto" />
    </View>
  );
}
const estilos = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});