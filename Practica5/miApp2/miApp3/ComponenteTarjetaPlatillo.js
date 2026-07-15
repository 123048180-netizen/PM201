import { View, Text, } from "react-native-web";
//Con destructuración
import React, {useState} from "react";
export const Perfil = ({nombre, precio, paisOrigen}) => {
    return(
        <View>
            <Text>{nombre}</Text>
            <Text>{precio}</Text>
            <Text>{paisOrigen}</Text>
            
            
        <Button title="Ver Perfil" onPress={()=> setMostrar(!mostrar)}></Button>
        </View>
);
}