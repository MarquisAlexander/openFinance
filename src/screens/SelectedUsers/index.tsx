import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CardCustomer} from '../../components/CardCustomer';
import {styles} from './styles';
import {useCustomer} from '../../context/CustomerContext';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export function SelectedCustomers() {
  const {selectedCustomer, setSelectedCustomer} = useCustomer();
  const [updateCardCustomer, setUpdateCardCustomer] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('[FOCUSED] Atualizando CardCustomer');
      setUpdateCardCustomer(true);
      // Aqui você pode atualizar qualquer estado interno ou refazer uma checagem
    }
  }, [isFocused]);
  const renderPaginationButton = (text, active = false) => (
    <TouchableOpacity
      style={[styles.pageButton, active && styles.pageButtonActive]}>
      <Text style={styles.pageText}>{text}</Text>
    </TouchableOpacity>
  );

  function removeCustomerById(idToRemove) {
    const makeArray =
      selectedCustomer &&
      selectedCustomer.filter(customer => customer.id !== idToRemove);
    setSelectedCustomer(makeArray);
  }

  function clearSelectedCustomers() {
    console.log('logica para limpar customers');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCount}>2</Text>
        <Text style={styles.headerText}> Clientes selecionados:</Text>
      </View>

      <FlatList
        data={selectedCustomer}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <CardCustomer
            name={item.name}
            salario={item.salary}
            empresa={item.companyValuation}
            id={item.id}
            removeCustomerById={() => removeCustomerById({Customer: item})}
            isSelectedCustomer={updateCardCustomer}
          />
        )}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListFooterComponent={() => (
          <>
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => clearSelectedCustomers()}>
              <Text style={styles.createButtonText}>
                Limpar clientes selecionados
              </Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}
