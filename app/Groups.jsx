import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React from "react";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Groups = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Insira o código da disciplina</Text>
        <TextInput style={styles.input} placeholder="ex: MCTA026-13" />
        <View style={styles.container2}>
          <View style={styles.row}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                Disciplina
              </Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                Professor
              </Text>
            </View>
            <View style={{ flex: 1.5 }}>
              <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                Turma
              </Text>
            </View>
          </View>
          <View styles/>
          <View style={styles.container3}>
            <View style={styles.line}></View>
          <View style={styles.row}>
            <Text style={{ flex: 3, fontSize: height * 0.02,}}>
              Funções de Uma Váriável
            </Text>
            <Text style={{ flex: 3, fontSize: height * 0.02,}}>
              Annibal Hetem Junior
            </Text>
            <Text style={{ flex: 1.5, fontSize: height * 0.02,}}>
              DA1
            </Text>
            </View>
            <Text style={styles.button}>link</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Groups;

const styles = StyleSheet.create({
  title: {
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: width * 0.2,
    marginTop: width * 0.2,
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: width * 0.2,
    marginTop: width * 0.2,
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    gap:10,
  },
  row: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: width * 0.03,
  },
  input: {
    fontSize: height * 0.02,
    textAlign: "center",
    alignItems: "center",
    width: width * 0.6,
    padding: width * 0.02,
    backgroundColor: "#C3E182",
    borderRadius: 20,
  },
  button: {
    fontSize: height * 0.02,
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    padding: width * 0.015,
    backgroundColor: '#ffffff',
    color: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  line: {
    backgroundColor: 'black',
    height: 1,
    width: '100%',
  },
});
