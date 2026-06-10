import { View, Text, Button } from "react-native-web";
//Con destructuración
import React, {useState} from "react";
export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    const [mostrar, setMostrar] = useState(false);
    return(
        <View>
            <Text>{nombre}</Text>
            {mostrar &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }
        <Button title="Ver Perfil" onPress={()=> setMostrar(!mostrar)}></Button>
        </View>
);
}


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