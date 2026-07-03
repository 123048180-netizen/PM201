import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default function ListaSecciones() {
  const datos = [
    {
      title: 'Ingeniería en Sistemas',
      data: [
        { nombre: 'Dai' },
        { nombre: 'Karen' }
      ]
    },
    {
      title: 'Admin',
      data: [
        { nombre: 'Niño1' },
        { nombre: 'Niño2' }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Estudiantes por carrera
      </Text>

      <SectionList
        sections={datos}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.nombre}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#90caf9',
    padding: 10,
    marginTop: 10
  },
  item: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});