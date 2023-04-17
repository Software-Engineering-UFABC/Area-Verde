import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import logo from "../assets/area-verde.png";
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
        {/* <Button
        title="Press me"
        color="#f194ff"
        /> */}
        {/* <Link style={styles.button}>Notícias
        </Link> */}
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
    marginTop: height * 0.05,
    gap: 20,
  },
  title: {
    fontSize: height * 0.025,
    fontWeight: "bold",
    padding: width * 0.02,
  },
  buttonDiv: {
    display: "flex",
    gap: width * 0.015,
    alignItems: "center",
    justifyContent: "center",
    width: width * 1,
    marginBottom: height * 0.02,
  },
  button: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    width: width * 0.9,
    padding: width * 0.045,
    backgroundColor: "#13BB5B",
    color: "white",
    borderRadius: 20,
  },
  input: {
    fontSize: height * 0.02,
    textAlign: "center",
    alignItems: "center",
    width: width * 0.6,
    padding: width * 0.02,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
  },
  hyperlinkStyle: {
    fontSize: height * 0.02,
    color: "gray",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
});
