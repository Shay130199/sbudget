import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transations: [
        {id: 1, text: 'Outing', amount: -20 },
        {id: 2, text: 'Work', amount: 350 },
        {id: 3, text: 'Film Camera', amount: -15 },
        {id: 4, text: 'Univeristy Tools', amount: -120 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}