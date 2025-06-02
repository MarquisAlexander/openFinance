import React from 'react';
import {Alert, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import axios from 'axios';
import {formatCurrency} from '../../utils/formatCurrency';

export function CardCustomer({
  name,
  salario,
  empresa,
  id,
  editUser,
  addToSelectedCustomers,
  removeCustomerById,
  isSelectedCustomer = false,
}) {
  async function deleteUser() {
    try {
      await axios.delete(`https://boasorte.teddybackoffice.com.br/users/${id}`);
    } catch (error) {
      console.error('Erro ao excluir cliente', error);
    }
  }

  function preDeleteUser() {
    Alert.alert(
      'Excluir cliente:',
      `Tem certeza que deseja excluir o cliente ${name}?`,
      [
        {text: 'Excluir cliente', onPress: deleteUser},
        {text: 'Cancelar', style: 'cancel'},
      ],
      {cancelable: true},
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>
        Salário: {formatCurrency(String(salario))}
      </Text>
      <Text style={styles.detail}>
        Empresa: {formatCurrency(String(empresa))}
      </Text>

      <View
        style={[
          styles.actions,
          {justifyContent: isSelectedCustomer ? 'flex-end' : 'space-between'},
        ]}>
        {!isSelectedCustomer && (
          <>
            <TouchableOpacity onPress={addToSelectedCustomers}>
              <Icon name="plus" size={20} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={editUser}>
              <Icon name="edit-2" size={20} color="#000000" />
            </TouchableOpacity>
          </>
        )}

        {isSelectedCustomer ? (
          <TouchableOpacity onPress={removeCustomerById}>
            <Icon name="minus" size={20} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={preDeleteUser}>
            <Icon name="trash-2" size={20} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Bold',
  },
  detail: {
    fontSize: 14,
    fontFamily: 'Inter_24pt-Regular',
    paddingVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    borderRadius: 4,
  },
});
