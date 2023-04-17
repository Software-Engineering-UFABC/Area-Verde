import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Schedule = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <Button
          title="Quinzenal 1"
          color="gray"
          />
          <Button
          title="Quinzenal 2"
          color="gray"
          />
        </View>
      </View>
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  title: {
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 20,
    marginTop: 20,
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    gap: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  row2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
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
    textAlign: "center",
    alignItems: "center",
    width: "25%",
    padding: width * 0.015,
    backgroundColor: "#13BB5B",
    borderRadius: 20,
  },
  line: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
  },
});
