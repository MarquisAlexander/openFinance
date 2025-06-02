import {Text, View} from 'react-native';
import {styles} from './styles';

type HeaderFlatListProps = {
  totalCustomers: number;
};

export function HeaderFlatList({totalCustomers}: HeaderFlatListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCount}>{totalCustomers}</Text>
        <Text style={styles.headerText}> clientes encontrados:</Text>
      </View>
      <View style={styles.headerCustomersPerPage}>
        <Text style={styles.headerText}>Clientes por página: 16</Text>
      </View>
    </View>
  );
}
