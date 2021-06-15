import React from 'react';
import { Store } from '../store';

export const StoreContext = React.createContext(Store)

const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={Store}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreProvider }