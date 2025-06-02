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
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useIsFocused} from '@react-navigation/native';
import {Portal} from '@gorhom/portal';
import axios from 'axios';
import {Customer, useCustomer} from '../../context/CustomerContext';
import {CardCustomer} from '../../components/CardCustomer';
import {styles} from './styles';
import {formatCurrency} from '../../utils/formatCurrency';
import {parseCurrency} from '../../utils/parseCurrency';
import {HeaderFlatList} from '../../components/HeaderFlatList';

type RenderInputProps = {
  label: string;
  key: string;
  placeholder: string;
  isNumeric?: boolean;
};

const defaultValueNewUser = {
  id: '',
  name: '',
  salary: '',
  companyValuation: '',
};

export function Customers() {
  const {customers, setCustomers, selectedCustomer, setSelectedCustomer} =
    useCustomer();
  const [newUser, setNewUser] = useState<Customer>(defaultValueNewUser);
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
  const isFormValid =
    !!newUser?.name && !!newUser?.salary && !!newUser?.companyValuation;

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setUpdateCardCustomer(false);
    }
  }, [isFocused]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['60%'], []);

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
        salary: parseCurrency(String(newUser?.salary)),
        companyValuation: parseCurrency(String(newUser?.companyValuation)),
      };

      await axios.post('https://boasorte.teddybackoffice.com.br/users', body);
      Keyboard.dismiss();
      bottomSheetRef.current?.close();
      setNewUser(defaultValueNewUser);
      fetchUsers();
    } catch (error) {
      console.error('Erro ao criar cliente', error);
    } finally {
      setLoading(false);
    }
  };

  function addCustomersToSelected(CustomerToAdd: Customer) {
    const newArray: Customer[] = selectedCustomer
      ? [...selectedCustomer, CustomerToAdd]
      : [CustomerToAdd];
    if (selectedCustomer?.some(item => item.id === CustomerToAdd.id)) {
      console.log('ja existe no array', CustomerToAdd);
    } else {
      setSelectedCustomer(newArray);
    }
  }

  async function handleUpdateUser() {
    try {
      const body = {
        name: newUser?.name,
        salary: parseCurrency(String(newUser?.salary)),
        companyValuation: parseCurrency(String(newUser?.companyValuation)),
      };
      setLoading(true);
      await axios.patch(
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

  const renderInput = ({
    label,
    key,
    placeholder,
    isNumeric = false,
  }: RenderInputProps) => {
    const handleChange = value => {
      if (isNumeric) {
        const numericValue = value.replace(/\D/g, '');

        if (newUser[key] !== numericValue) {
          setNewUser(prev => ({...prev, [key]: numericValue}));
        }
      } else {
        if (newUser[key] !== value) {
          setNewUser(prev => ({...prev, [key]: value}));
        }
      }
    };

    const displayValue = isNumeric
      ? formatCurrency(String(newUser?.[key]))
      : newUser?.[key] ?? '';

    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={displayValue}
          onChangeText={handleChange}
          placeholder={placeholder}
          keyboardType={isNumeric ? 'numeric' : 'default'}
        />
      </>
    );
  };

  const renderPaginationButton = ({
    text = 'defaultTitle',
    active = false,
  }: {
    text: string | number;
    active?: boolean;
  }) => (
    <TouchableOpacity
      style={[styles.pageButton, active && styles.pageButtonActive]}>
      <Text style={styles.pageText}>{text}</Text>
    </TouchableOpacity>
  );

  function editUserData({name, salary, companyValuation, id}: Customer) {
    setNewUser({name, salary, companyValuation, id});
    setIsEditUser(true);
    handleOpen();
  }

  function onCloseBottomSheet() {
    setNewUser(defaultValueNewUser);
    setIsEditUser(false);
  }

  return (
    <>
      <FlatList
        data={customers}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => (
          <HeaderFlatList totalCustomers={customers.length} />
        )}
        style={{paddingHorizontal: 20}}
        renderItem={({item}) => (
          <CardCustomer
            name={item.name}
            salario={item.salary}
            empresa={item.companyValuation}
            id={item.id ?? 0}
            editUser={() =>
              editUserData({
                name: item.name,
                id: item.id,
                salary: item.salary,
                companyValuation: item.companyValuation,
              })
            }
            isSelectedCustomer={updateCardCustomer}
            addToSelectedCustomers={() => addCustomersToSelected(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListFooterComponent={() => (
          <>
            <TouchableOpacity style={styles.createButton} onPress={handleOpen}>
              <Text style={styles.createButtonText}>Criar cliente</Text>
            </TouchableOpacity>

            <View style={styles.pagination}>
              {renderPaginationButton({text: pagination.first})}
              {renderPaginationButton({text: '...'})}
              {renderPaginationButton({text: pagination.previous})}
              {renderPaginationButton({
                text: pagination.current,
                active: true,
              })}
              {renderPaginationButton({text: pagination.next})}
              {renderPaginationButton({text: '...'})}
              {renderPaginationButton({text: pagination.last})}
            </View>
          </>
        )}
      />
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          onClose={() => newUser.name && onCloseBottomSheet()}
          backgroundStyle={{backgroundColor: '#7A7A7A'}}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
              opacity={0.2} // Transparência do fundo
            />
          )}
          handleIndicatorStyle={{backgroundColor: '#fff'}}>
          <BottomSheetView style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Criar cliente</Text>

            {renderInput({
              label: 'Nome',
              key: 'name',
              placeholder: 'Digite o nome:',
            })}
            {renderInput({
              label: 'Salário',
              key: 'salary',
              placeholder: 'Digite o salário:',
              isNumeric: true,
            })}
            {renderInput({
              label: 'Valor da empresa',
              key: 'companyValuation',
              placeholder: 'Digite o valor da empresa:',
              isNumeric: true,
            })}

            <TouchableOpacity
              style={
                isFormValid ? styles.sheetButton : styles.inactiveSheetButton
              }
              disabled={loading || !isFormValid}
              onPress={() =>
                isEditUser ? handleUpdateUser() : handleCreateUser()
              }>
              {loading ? (
                <ActivityIndicator size={24} color="#fff" />
              ) : (
                <Text
                  style={
                    isFormValid
                      ? styles.sheetButtonText
                      : styles.inactiveSheetButtonText
                  }>
                  {isEditUser ? 'Salvar edição' : 'Criar cliente'}
                </Text>
              )}
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    </>
  );
}
