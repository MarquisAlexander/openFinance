import {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  Keyboard,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import axios from 'axios';
import {useCustomer} from '../../context/CustomerContext';
import {CardCustomer} from '../../components/CardCustomer';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';

export function Customers() {
  const {customers, setCustomers, selectedCustomer, setSelectedCustomer} =
    useCustomer();
  const [newUser, setNewUser] = useState({});
  const [isEditUser, setIsEditUser] = useState(false);
  const [updateCardCustomer, setUpdateCardCustomer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    first: 1,
    current: 1,
    last: 1,
    previous: 0,
    next: 2,
  });

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('[FOCUSED] Atualizando CardCustomer');
      setUpdateCardCustomer(false);
      // Aqui você pode atualizar qualquer estado interno ou refazer uma checagem
    }
  }, [isFocused]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['65%'], []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const {data} = await axios.get(
        'https://boasorte.teddybackoffice.com.br/users',
      );
      setCustomers(data.clients);
      setPagination(prev => ({
        ...prev,
        current: data.currentPage,
        last: data.totalPages,
        previous: data.currentPage - 1,
        next: data.currentPage + 1,
      }));
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
    }
  };

  const handleOpen = () => bottomSheetRef.current?.expand();

  const handleCreateUser = async () => {
    try {
      setLoading(true);
      const body = {
        name: newUser?.name,
        salary: Number(newUser?.salary),
        companyValuation: Number(newUser?.companyValuation),
      };

      await axios.post('https://boasorte.teddybackoffice.com.br/users', body);
      Keyboard.dismiss();
      bottomSheetRef.current?.close();
      fetchUsers();
    } catch (error) {
      console.error('Erro ao criar cliente', error);
    } finally {
      setLoading(false);
    }
  };

  function addCustomersToSelected({Customer}) {
    const newArray = selectedCustomer
      ? [...selectedCustomer, Customer]
      : [Customer];
    if (selectedCustomer?.some(item => item.id === Customer.id)) {
      console.log('ja existe no array', Customer);
    } else {
      setSelectedCustomer(newArray);
    }
  }

  async function handleUpdateUser() {
    try {
      const body = {
        name: newUser?.name,
        salary: Number(newUser?.salary),
        companyValuation: Number(newUser?.companyValuation),
      };
      setLoading(true);
      const response = await axios.patch(
        `https://boasorte.teddybackoffice.com.br/users/${newUser?.id}`,
        body,
      );
      Keyboard.dismiss();
      bottomSheetRef.current?.close();
    } catch (error) {
      console.error('Erro ao editar cliente', error);
    } finally {
      setLoading(false);
    }
  }

  const renderInput = (label, key, placeholder) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={isEditUser && `${newUser?.[key]}`}
        onChangeText={value => setNewUser({...newUser, [key]: value})}
        placeholder={placeholder}
      />
    </>
  );

  const renderPaginationButton = (text, active = false) => (
    <TouchableOpacity
      style={[styles.pageButton, active && styles.pageButtonActive]}>
      <Text style={styles.pageText}>{text}</Text>
    </TouchableOpacity>
  );

  function editUserData({user}) {
    setNewUser({...user});
    setIsEditUser(true);
    handleOpen();
  }

  function onCloseBottomSheet() {
    setNewUser({});
    setIsEditUser(false);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerCount}>2</Text>
          <Text style={styles.headerText}> clientes encontrados:</Text>
        </View>

        <FlatList
          data={customers}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <CardCustomer
              name={item.name}
              salario={item.salary}
              empresa={item.companyValuation}
              id={item.id}
              editUser={() => editUserData({user: item})}
              isSelectedCustomer={updateCardCustomer}
              addToSelectedCustomers={() =>
                addCustomersToSelected({Customer: item})
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          ListFooterComponent={() => (
            <>
              <TouchableOpacity
                style={styles.createButton}
                onPress={handleOpen}>
                <Text style={styles.createButtonText}>Criar cliente</Text>
              </TouchableOpacity>

              <View style={styles.pagination}>
                {renderPaginationButton(pagination.first)}
                {renderPaginationButton('...')}
                {renderPaginationButton(pagination.previous)}
                {renderPaginationButton(pagination.current, true)}
                {renderPaginationButton(pagination.next)}
                {renderPaginationButton('...')}
                {renderPaginationButton(pagination.last)}
              </View>
            </>
          )}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => newUser.name && onCloseBottomSheet()}
        backgroundStyle={{backgroundColor: '#7A7A7A'}}
        handleIndicatorStyle={{backgroundColor: '#fff'}}>
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Criar cliente</Text>

          {renderInput('Nome', 'name', 'Digite o nome:')}
          {renderInput('Salário', 'salary', 'Digite o salário:')}
          {renderInput(
            'Valor da empresa',
            'companyValuation',
            'Digite o valor da empresa:',
          )}

          <TouchableOpacity
            style={styles.sheetButton}
            disabled={loading}
            onPress={() =>
              isEditUser ? handleUpdateUser() : handleCreateUser()
            }>
            {loading ? (
              <ActivityIndicator size={24} color="#fff" />
            ) : (
              <Text style={styles.sheetButtonText}>
                {isEditUser ? 'Salvar edição' : 'Criar cliente'}
              </Text>
            )}
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}
