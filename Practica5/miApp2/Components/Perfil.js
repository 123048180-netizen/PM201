import { View, Text, Button, StyleSheet, ImageBackground } from "react-native-web";
//Con destructuración
import React, {useState} from "react";
export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {
    const [mostrar, setMostrar] = useState(false);
    return(
        <View style={[estilos.tarjeta, style]}>
            <Text style={estilos.nombre}>{nombre}</Text>
            {mostrar &&
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otroTexto}>{materia}</Text>
            <Text style={estilos.otroTexto}>{cuatri}</Text>
            </>
            }
        <Button title="Ver Perfil" onPress={()=> setMostrar(!mostrar)}></Button>
        </View>
);
}

const estilos = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: "uppercase",
    },
    carrera: {
        fontSize: 18,
        color: "pink",
        fontFamily: "Arial",
    },
    otroTexto: {
        fontSize: 12,
        color: "pink",
        fontFamily: "Courier",
        fontStyle: "italic",
    },
    tarjeta: {
        borderWidth: 2,
        padding: 25,
        margin: 20,
        //backgroundColor: "blue",
    
    },
})


/*export const Perfil = (props) => {
    return(
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
);
}*/