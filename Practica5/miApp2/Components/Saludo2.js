import { View, Button, Text, Image } from "react-native-web";


export const Saludo2 = () => {
    return(
        <View>
            <Text>Hola RN: Componente Propio</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title = 'Hola 201'></Button>

        </View>
    
);
}