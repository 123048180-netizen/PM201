import React, { useState } from 'react';
import {View, Text, TextInput, Pressable, FlatList, ImageBackground,
  ActivityIndicator, Alert, StyleSheet, KeyboardAvoidingView, Platform,} from 'react-native';

export default function HomeScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const agregarLibro = () => {
    // Validar campos llenos
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos antes de agregar el libro.');
      return;
    }

    setGuardando(true);

    // Simular espera de guardado (4 segundos)
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros((prev) => [...prev, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);

      Alert.alert('Libro agregado', `"${nuevoLibro.titulo}" se guardó correctamente.`);
    }, 4000);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.header}>Registro de Libros Leídos</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#666"
            value={titulo}
            onChangeText={setTitulo}
            editable={!guardando}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#666"
            value={autor}
            onChangeText={setAutor}
            editable={!guardando}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#666"
            value={genero}
            onChangeText={setGenero}
            editable={!guardando}
          />

          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
              guardando && styles.botonDeshabilitado,
            ]}
            onPress={agregarLibro}
            disabled={guardando}
          >
            {guardando ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.botonTexto}>Agregar libro</Text>
            )}
          </Pressable>
        </View>

        <FlatList
          style={styles.lista}
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
              <Text style={styles.cardTexto}>Género: {item.genero}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.vacio}>Aún no has agregado libros.</Text>
          }
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(185,131,255,0.35)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(155,89,182,0.6)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  form: {
    backgroundColor: 'rgba(255,240,250,0.95)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFB6E1',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#F7B6E9',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#7A4DA0',
  },
  boton: {
    backgroundColor: '#FF7EB9',
    paddingVertical: 13,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#B983FF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  botonPresionado: {
    backgroundColor: '#E85CA0',
  },
  botonDeshabilitado: {
    backgroundColor: '#FFC4DE',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lista: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#B983FF',
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9B59B6',
  },
  cardTexto: {
    fontSize: 14,
    color: '#C2698D',
  },
  vacio: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
    fontWeight: '600',
  },
});