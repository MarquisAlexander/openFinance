// src/contexts/CustomerContext.tsx
import React, {createContext, useState, useContext} from 'react';

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
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer[] | null>(
    null,
  );

  return (
    <CustomerContext.Provider
      value={{customers, setCustomers, selectedCustomer, setSelectedCustomer}}>
      {children}
    </CustomerContext.Provider>
  );
};

// Hook para usar o contexto mais facilmente
export const useCustomer = () => useContext(CustomerContext);
