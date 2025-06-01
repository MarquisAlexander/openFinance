import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function Login({navigation}) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem-vindo!</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite o seu nome:"
        placeholderTextColor="#AAAAAA"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
