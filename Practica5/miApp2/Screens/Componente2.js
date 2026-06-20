/*Zona 1; aquí importamos todos nuestros recursos*/
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Button,Pressable
} from 'react-native';

/*Zona 2; Es donde estará el main y toda la parte de la vista */
export default function App() {

  const [likes, setlikes] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> Pressed</Text>

      <Text style={styles.likes}>Likes: {likes} </Text>

      <Pressable
        onPress={() => setlikes((prev) => prev + 1)}
        onLongPress={() => setlikes(0)}
        onPressIn={() => console.log("Dedo abajo")}
        onPressOut={() => console.log("Dedo arriba")}
        disabled={disabled}
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
          disabled && styles.botonDeshabilitado,
        ]}
      >

        <Image
          source={require('../assets/image.png')}
          style={styles.imagen}
        />

        <Text style={styles.textoBoton}>
          Toca aqui para dar un like
        </Text>

      </Pressable>

      <Text style={styles.instruccion}>
        Mantén presionada la imagen para reiniciar los likes
      </Text>

      <Button
        color="#FF69B4"
        title={disabled ? "Habilitar Pressable" : "Deshabilitar Pressable"}
        onPress={() => setDisabled((prev) => !prev)}
      />

    </View>
  );
}

/*Aqui irán los estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6F2',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D63384',
  },

  likes: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF1493',
  },

  boton: {
    backgroundColor: '#FF69B4',
    padding: 18,
    borderRadius: 25,
    alignItems: 'center',

    shadowColor: '#FF69B4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 8,
  },

  botonPresionado: {
    backgroundColor: '#FF1493',
    transform: [{ scale: 0.97 }],
  },

  botonDeshabilitado: {
    backgroundColor: '#D8A7C4',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },

  instruccion: {
    textAlign: 'center',
    color: '#C71585',
    fontSize: 14,
    fontStyle: 'italic',
  },

  imagen: {
    width: 280,
    height: 180,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});