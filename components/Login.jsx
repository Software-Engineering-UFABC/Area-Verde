import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import logo from '../assets/area-verde.png';

import React from 'react'

const Login = () => {
  return (
    <>
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
    </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  buttonDiv: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    textAlign: 'center',
    alignItems: 'center',
    width: "50%",
    padding: 8,
    backgroundColor: '#13BB5B',
    color: 'white',
    borderRadius: 20,
  },
  input: {
    textAlign: 'center',
    alignItems: 'center',
    width: "50%",
    padding: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
  }
})
