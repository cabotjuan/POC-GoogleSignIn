import React from 'react';
import {Text, View} from 'react-native';
import {GOOGLE_CLIENT_ID} from '@env';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
});

const App = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      console.log('JWT-idToken de Google:', idToken);
      //1. Mandar a backend el idToken
      //2. Esperar que valide en google el backend y responda con el user
      //3. Mostrar info del user desde el backend
    } catch (error) {
      console.log('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={signIn} style={styles.roundButton1}>
        <Text style={styles.text}>INGRESAR CON GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: '75%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontSize: 18,
    padding: 10,
  },
});
