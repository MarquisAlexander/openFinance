import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '@react-native-vector-icons/feather';

export function CardCustomer({name, salario, empresa}) {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
        borderRadius: 4,
      }}>
      <Text style={{fontSize: 16, fontWeight: 700}}>{name}</Text>
      <Text style={{fontSize: 14, fontWeight: 400, paddingVertical: 10}}>
        Salário: {salario}
      </Text>
      <Text style={{fontSize: 14, fontWeight: 400}}>Empresa: {empresa}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: 15,
          borderRadius: 4,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="plus" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="edit-2" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="trash-2" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
