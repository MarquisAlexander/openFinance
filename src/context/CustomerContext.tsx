import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Customer = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
};

type CustomerContextType = {
  customers: Customer[];
  setCustomers: (data: Customer[]) => void;
  selectedCustomer: Customer[] | null;
  setSelectedCustomer: (customer: Customer[] | null) => void;
};

const CustomerContext = createContext<CustomerContextType>(
  {} as CustomerContextType,
);

export const CustomerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [customers, setCustomersState] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomerState] = useState<
    Customer[] | null
  >(null);

  const CUSTOMERS_KEY = '@customers';
  const SELECTED_CUSTOMERS_KEY = '@selected_customers';

  useEffect(() => {
    (async () => {
      const customersJSON = await AsyncStorage.getItem(CUSTOMERS_KEY);
      const selectedJSON = await AsyncStorage.getItem(SELECTED_CUSTOMERS_KEY);

      if (customersJSON) {
        setCustomersState(JSON.parse(customersJSON));
      }
      if (selectedJSON) {
        setSelectedCustomerState(JSON.parse(selectedJSON));
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    AsyncStorage.setItem(
      SELECTED_CUSTOMERS_KEY,
      JSON.stringify(selectedCustomer),
    );
  }, [selectedCustomer]);

  const setCustomers = (data: Customer[]) => setCustomersState(data);
  const setSelectedCustomer = (data: Customer[] | null) =>
    setSelectedCustomerState(data);

  return (
    <CustomerContext.Provider
      value={{customers, setCustomers, selectedCustomer, setSelectedCustomer}}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);
