import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, TextInput} from 'react-native';
import logo from '../assets/area-verde.png';
import {Link} from "expo-router";
import React from 'react'

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Login = () => {
  return (
    <>
    <KeyboardAvoidingView behavior='position'>
    <View style={styles.image}>
      <Image style={styles.image} source={logo}/>
    </View>
    <View style={styles.buttonDiv}>
    <TextInput
        style={styles.input}
        placeholder="Login"
      />
      <TextInput
        style={[styles.input, styles.password]}
        secureTextEntry={true}
        placeholder="Senha"
      /> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
      <Link style={styles.hyperlinkStyle} href="/Register">Criar conta
      </Link>
    </View>
    </KeyboardAvoidingView>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  buttonDiv: {
    display: 'flex',
    gap: width * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 1,
    marginBottom: height *0.02
  },
  button: {
    fontSize: height * 0.02,
    textAlign: 'center',
    alignItems: 'center',
    width: width * 0.6,
    padding: width * 0.015,
    backgroundColor: '#13BB5B',
    color: 'white',
    borderRadius: 20,
  },
  input: {
    fontSize: height * 0.02,
    textAlign: 'center',
    alignItems: 'center',
    width: width * 0.6,
    padding: width * 0.02,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
  },
  hyperlinkStyle: {
    fontSize: height * 0.02,
    color: "gray",
    textDecorationLine: 'underline',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
    }
});