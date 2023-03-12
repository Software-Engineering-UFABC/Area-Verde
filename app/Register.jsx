import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, TextInput,} from 'react-native';
import React from 'react';
import { useNavigation } from "expo-router";

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Register = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
        <Text style={styles.title}>Crie uma conta</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
            style={[styles.input, styles.password]}
            secureTextEntry={true}
            placeholder="Senha"
          />
        <TextInput
            style={[styles.input, styles.password]}
            secureTextEntry={true}
            placeholder="Confirmar Senha"
          />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.button}>Criar
            </Text>
          </TouchableOpacity>
          <Text style={styles.hyperlinkStyle}
        onPress={() => {
          navigation.goBack();
        }}>Voltar
          </Text></View>
    </KeyboardAvoidingView>
  )}

export default Register;

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        alignItems: "center",
        marginTop: height * 0.35,
        gap: height * 0.02,
    },
    title: {
        fontSize: height * 0.03,
        fontWeight: "bold"
    },
    input: {
        fontSize: height * 0.02,
        textAlign: "center",
        alignItems: "center",
        width: width * 0.6,
        padding: width * 0.02,
        backgroundColor: "#E6E6E6",
        borderRadius: 20
    },
    button: {
        fontSize: height * 0.02,
        textAlign: "center",
        alignItems: "center",
        width: width * 0.6,
        padding: width * 0.015,
        backgroundColor: "#13BB5B",
        color: "white",
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