import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import header from "../assets/header.png";
import home from "../assets/home.png";
import calendar from "../assets/calendar.png";
import search from "../assets/search.png";
import newspaper from "../assets/newspaper.png";
import account from "../assets/account.png";
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
        <ScrollView>
          <View style={styles.row}>
            <Link style={styles.button} href="/Login">
              Fazer login
              <Image style={styles.image2} source={home} />
            </Link>
            <Link style={styles.button} href="/Register">
              Criar conta
              <Image style={styles.image2} source={account} />
            </Link>
          </View>
          <View style={styles.row}>
            <Link style={styles.button} href="/Groups">
              Ver Grupos
              <Image style={styles.image2} source={search} />
            </Link>
            <Link style={styles.button} href="/Schedule">
              Ver Grade
              <Image style={styles.image2} source={calendar}/>
            </Link>
          </View>
          <View style={styles.row}>
            <Link style={styles.button} href="/Notices">
              Ver Notícias
              <Image style={styles.image2} source={newspaper} />
            </Link>
          </View>
        </ScrollView>
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
  image2: {
    // display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
    height: height * 0.05,
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
  row: {
    display: "flex",
    flexDirection: "row",
    gap: width * 0.03,
    padding: width * 0.02,
  },
  button: {
    fontSize: height * 0.021,
    fontWeight: "bold",
    textAlign: "center",
    width: width * 0.45,
    height: width * 0.4,
    padding: width * 0.1,
    backgroundColor: "#13BB5B",
    color: "white",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
