import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export function Login({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        marginHorizontal: 20,
      }}>
      <Text style={{fontSize: 32, fontWeight: 400, lineHeight: 100}}>
        Olá, seja bem-vindo!
      </Text>
      <TextInput
        style={{
          height: 60,
          width: '100%',
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#D9D9D9',
          marginBottom: 20,
          fontSize: 24,
          paddingLeft: 20,
        }}
        placeholderTextColor={'#AAAAAA'}
        placeholder="Digite o seu nome:"
      />

      <TouchableOpacity
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#EC6724',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onPress={() => navigation.navigate('Main')}>
        <Text
          style={{
            fontSize: 24,
            color: '#FFFFFF',
            fontWeight: 700,
          }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
