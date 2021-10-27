/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import {createContext, useContext} from 'react';

export const AuthContext = createContext();

export function useAuthentication() {
  return useContext(AuthContext);
}
