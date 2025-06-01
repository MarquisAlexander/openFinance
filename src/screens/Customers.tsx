import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CardCustomer} from '../components/CardCustomer';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import axios from 'axios';

export function Customers({navigation}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    first: 1,
    current: 4,
    last: 12,
    previous: 3,
    next: 5,
  });

  console.log('fazendo chamada');

  useEffect(() => {
    console.log('fazendo chamada');

    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(
        'https://boasorte.teddybackoffice.com.br/users',
      );
      setData(response.data.clients);
      setPagination({
        ...pagination,
        current: response.data.currentPage,
        last: response.data.totalPages,
        first: response.data.currentPage,
        previous: response.data.currentPage - 1,
        next: response.data.currentPage + 1,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['1%', '65%'], []);

  // Função para abrir o modal
  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: '#F5F5F5',
          flex: 1,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: 700}}>2 </Text>
            <Text style={{fontSize: 16, fontWeight: 400}}>
              clientes encontrados:
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 400}}>
              Clientes por página:
            </Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CardCustomer
              name={item.name}
              salario={item.salary}
              empresa={item.companyValuation}
              key={item.id}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          ListFooterComponent={() => (
            <>
              <TouchableOpacity
                style={{
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#EC6724',
                  width: '100%',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 20,
                }}
                onPress={handleOpen}>
                <Text style={{fontSize: 14, color: '#EC6724', fontWeight: 700}}>
                  Criar cliente
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 20,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>
                    {pagination.first}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>...</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>
                    {pagination.previous}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                    backgroundColor: '#EC6724',
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>
                    {pagination.current}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>
                    {pagination.next}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>...</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    height: 35,
                    width: 35,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 700}}>
                    {pagination.last}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // -1 = inicia fechado
        snapPoints={snapPoints}
        enablePanDownToClose={true} // permite fechar arrastando pra baixo
        backgroundStyle={{backgroundColor: '#7A7A7A'}}
        handleIndicatorStyle={{backgroundColor: '#fff'}} // Cor do traço aqui
      >
        <BottomSheetView
          style={{
            flex: 1,
            paddingHorizontal: 32,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              paddingVertical: 20,
            }}>
            Criar cliente
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              paddingBottom: 5,
            }}>
            Nome
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              height: 48,
              fontSize: 16,
              paddingLeft: 10,
              fontWeight: 500,
              borderColor: '#AAAAAA',
              borderRadius: 8,
              width: '100%',
              marginBottom: 28,
            }}
            placeholder="Digite o nome:"
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              paddingBottom: 5,
            }}>
            Salário
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              height: 48,
              fontSize: 16,
              paddingLeft: 10,
              fontWeight: 500,
              borderColor: '#AAAAAA',
              borderRadius: 8,
              width: '100%',
              marginBottom: 28,
            }}
            placeholder="Digite o salário:"
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              paddingBottom: 5,
            }}>
            Valor da empresa
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              height: 48,
              fontSize: 16,
              paddingLeft: 10,
              fontWeight: 500,
              borderColor: '#AAAAAA',
              borderRadius: 8,
              width: '100%',
              marginBottom: 28,
            }}
            placeholder="Digite o valor da empresa:"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#EB6625',
              alignItems: 'center',
              justifyContent: 'center',
              height: 48,
              borderRadius: 8,
              width: '100%',
              marginBottom: 28,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
              }}>
              Criar cliente
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}
