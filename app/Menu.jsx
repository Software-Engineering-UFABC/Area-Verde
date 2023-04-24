import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import header from '../assets/header.png';
import { Link } from "expo-router";
import React from "react";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Menu = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.image} source={header} />
        </View>
        <Text style={styles.title}>O que você deseja?</Text>
        <Link style={styles.button} href="/Login">
          Fazer login
        </Link>
        <Link style={styles.button} href="/Register">
          Criar conta
        </Link>
        <Link style={styles.button} href="/Groups">
          Consultar grupos
        </Link>
        <Link style={styles.button} href="/Schedule">
          Consultar grade de aulas
        </Link>
        <Link style={styles.button} href="/Notices">
          Consultar Notícias
        </Link>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  image: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: height * 0.1,
    resizeMode: "contain",
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: height * 0.1,
    gap: 20,
  },
  title: {
    fontSize: height * 0.025,
    fontWeight: "bold",
    padding: width * 0.02,
  },
  buttonDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: width * 1,
  },
  button: {
    fontSize: height * 0.021,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    width: width * 0.9,
    padding: width * 0.065,
    backgroundColor: "#13BB5B",
    color: "white",
    borderRadius: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
  },
});
