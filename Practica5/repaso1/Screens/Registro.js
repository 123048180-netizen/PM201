import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, Switch, Button, Alert, Platform} from "react-native";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [asistencia, setAsistencia] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [participa, setParticipa] = useState(false);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const enviarRegistro = () => {

    if (nombre.trim() === "") {
      mostrarAlerta("Campo vacío", "Por favor escribe tu nombre.");
      return;
    }

    if (carrera.trim() === "") {
      mostrarAlerta("Campo vacío", "Por favor escribe tu carrera.");
      return;
    }

    if (semestre.trim() === "") {
      mostrarAlerta("Campo vacío", "Por favor escribe tu semestre.");
      return;
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Escribe tu nombre..."
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
        autoCapitalize="words"
        style={styles.input}
      />

      <TextInput
        placeholder="Tu carrera..."
        value={carrera}
        onChangeText={setCarrera}
        maxLength={30}
        autoCapitalize="words"
        style={styles.input}
      />

      <TextInput
        placeholder="Escribe tu semestre..."
        value={semestre}
        onChangeText={(text) =>
          setSemestre(text.replace(/[^0-9]/g, ""))
        }
        maxLength={2}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Text>¿Asistirá al taller?</Text>
        <Switch
          value={asistencia}
          onValueChange={setAsistencia}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>¿Participará en las actividades?</Text>
        <Switch
          value={participa}
          onValueChange={setParticipa}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <Button
        title="Enviar registro"
        onPress={enviarRegistro}
      />

      <Text style={styles.subtitle}>Tu información:</Text>

      <Text style={styles.result}>Nombre: {nombre}</Text>
      <Text style={styles.result}>Carrera: {carrera}</Text>
      <Text style={styles.result}>Semestre: {semestre}</Text>
      <Text style={styles.result}>
        Asistencia: {asistencia ? "Sí" : "No"}
      </Text>
      <Text style={styles.result}>
        Constancia: {constancia ? "Sí" : "No"}
      </Text>
      <Text style={styles.result}>
        Actividades: {participa ? "Sí" : "No"}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#FFE4F2", // rosa pastel
  },

  input: {
    borderWidth: 1,
    borderColor: "#FF8FB1",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#6B2D4D",
    shadowColor: "#FF69B4",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#FFD1E8",
    borderRadius: 12,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    color: "#D63384",
    textShadowColor: "#FFB6D9",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  result: {
    fontSize: 16,
    marginHorizontal: 15,
    marginVertical: 4,
    color: "#7A2E52",
    backgroundColor: "#FFE0EF",
    padding: 8,
    borderRadius: 10,
  },
});

export default Registro;