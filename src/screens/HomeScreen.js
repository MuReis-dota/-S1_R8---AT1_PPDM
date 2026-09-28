import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/goku.jpg')}
        style={styles.imagemGoku}
        imageStyle={styles.imagem}
      >
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.conteudo}>

        <Text style={styles.title}>
          Dragon Ball
        </Text>

        <Text style={styles.description}>
          Conheça os personagens de Dragon Ball
          e descubra seus poderes e habilidades!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personagens')}
        >
          <Text style={styles.buttonText}>
            Ver Personagens
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  imagemGoku: {
    width: '100%',
    height: 430,
    justifyContent: 'flex-end',
  },

  imagem: {
    resizeMode: 'cover',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },

  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    color: '#B0BEC5',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },

  button: {
    width: '90%',
    backgroundColor: '#F57C00',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,

    shadowColor: '#F57C00',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});