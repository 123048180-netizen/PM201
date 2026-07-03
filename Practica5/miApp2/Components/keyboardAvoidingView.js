import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
//Verificar el nombre
export default function KeyboardAvoidingDemo() {
  const [nombre, setNombre] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 80}
      style={styles.container}
    >
      <Text style={styles.titulo}>
        KeyboardAvoidingView
      </Text>

      <Text style={styles.descripcion}>
        Evita que el teclado cubra el campo de texto cuando el usuario escribe.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <Text style={styles.resultado}>
        Nombre: {nombre || 'Sin capturar'}
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    textAlign: 'center',
    color: '#444444',
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 16,
  },
});