import React from 'react';
import {render} from '@testing-library/react-native';
import {CardCustomer} from './index';

describe('CardCustomer', () => {
  let getByText: any;

  beforeEach(() => {
    const rendered = render(
      <CardCustomer
        name="John"
        salario={3000}
        empresa={500000}
        id={1}
        isSelectedCustomer={false}
        addToSelectedCustomers={() => {}}
        removeCustomerById={() => {}}
        editUser={() => {}}
      />,
    );
    getByText = rendered.getByText;
  });

  it('should render customer name correctly', () => {
    expect(getByText('John')).toBeTruthy();
  });

  it('should render customer salary correctly', () => {
    expect(getByText('Salário: 3000')).toBeTruthy();
  });
});
