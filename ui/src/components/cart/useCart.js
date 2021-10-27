/*
  Author: Rina Chua
  Date: 27 Sep 2021
*/

import {createContext, useContext} from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
