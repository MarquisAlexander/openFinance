import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {Portal} from '@gorhom/portal';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useMemo, useRef} from 'react';

type HeaderFlatListProps = {
  totalCustomers: number;
};

export function HeaderFlatList({
  totalCustomers,
  selectedValue,
  setSelectedValue,
}: HeaderFlatListProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%'], []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCount}>{totalCustomers}</Text>
        <Text style={styles.headerText}> clientes encontrados:</Text>
      </View>
      <View style={styles.headerCustomersPerPage}>
        <Text style={styles.headerText}>Clientes por página:</Text>
        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
          <Text style={styles.headerText}>16</Text>
        </TouchableOpacity>
      </View>

      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          backgroundStyle={{backgroundColor: '#7A7A7A'}}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
              opacity={0.2}
            />
          )}
          handleIndicatorStyle={{backgroundColor: '#fff'}}>
          <BottomSheetView style={styles.sheetContent}>
            <FlatList
              data={Array.from({length: 15}, (_, i) => i + 1)}
              keyExtractor={item => item.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {}}
                  style={{alignItems: 'center'}}>
                  <Text style={styles.textNumber}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    </View>
  );
}
