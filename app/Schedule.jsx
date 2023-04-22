import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { arrow } from '../assets/arrow.png';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Schedule = () => {
  return (
    <>
      <ScrollView>
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
            <Button title="Quinzenal 1" color="gray" />
            <Button title="Quinzenal 2" color="gray" />
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Segunda-Feira</Text>
            <View style={styles.line}></View>
            <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            <View style={styles.container3}>
              <Text>Disciplina</Text>
              <Text>Horário</Text>
              <Text>Professor</Text>
              <Text>Sala</Text>
            </View>
            <View style={styles.container3}>
              <Text>Disciplina2</Text>
              <Text>Horário2</Text>
              <Text>Professor2</Text>
              <Text>Sala2</Text>
            </View>
            </ScrollView>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Terça-Feira</Text>
            <View style={styles.line}></View>
            <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            <View style={styles.container3}>
              <Text>Disciplina</Text>
              <Text>Horário</Text>
              <Text>Professor</Text>
              <Text>Sala</Text>
            </View>
            <View style={styles.container3}>
              <Text>Disciplina2</Text>
              <Text>Horário2</Text>
              <Text>Professor2</Text>
              <Text>Sala2</Text>
            </View>
            </ScrollView>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Quarta-Feira</Text>
            <View style={styles.line}></View>
            <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            <View style={styles.container3}>
              <Text>Disciplina</Text>
              <Text>Horário</Text>
              <Text>Professor</Text>
              <Text>Sala</Text>
            </View>
            <View style={styles.container3}>
              <Text>Disciplina2</Text>
              <Text>Horário2</Text>
              <Text>Professor2</Text>
              <Text>Sala2</Text>
            </View>
            </ScrollView>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Quinta-Feira</Text>
            <View style={styles.line}></View>
            <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            <View style={styles.container3}>
              <Text>Disciplina</Text>
              <Text>Horário</Text>
              <Text>Professor</Text>
              <Text>Sala</Text>
            </View>
            <View style={styles.container3}>
              <Text>Disciplina2</Text>
              <Text>Horário2</Text>
              <Text>Professor2</Text>
              <Text>Sala2</Text>
            </View>
            </ScrollView>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Sexta-Feira</Text>
            <View style={styles.line}></View>
            <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
            <View style={styles.container3}>
              <Text>Disciplina</Text>
              <Text>Horário</Text>
              <Text>Professor</Text>
              <Text>Sala</Text>
            </View>
            <View style={styles.container3}>
              <Text>Disciplina2</Text>
              <Text>Horário2</Text>
              <Text>Professor2</Text>
              <Text>Sala2</Text>
            </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  title: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#13BB5B",
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
    alignItems: "center",
    // justifyContent: "center",
    gap: width * 0.03,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    width: width * 0.85,
    gap: 10,
    alignItems: "center",
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
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: width*0.2,
  }
});
