import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {RootStackParamList} from '../../../@types/navigation'; // ajuste o caminho conforme seu projeto

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export function Login({navigation}: Props) {
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
