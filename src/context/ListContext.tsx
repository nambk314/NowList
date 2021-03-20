import React, { useReducer, createContext } from 'react'

export const NowContext = createContext({});

const initialState = {
    now: [
        'Task 1',
        'Task 2',
        'Task 3',
    ], 
    loading: false,
    error: null,
}

const reducer = (state : any, action : any) => {
    switch (action.type) {
        case 'ADD_NOW_TASK':
            return {
                now: [...state.now, action.payload]
            }
        case 'DEL_NOW_TASK':
            return {
                now: state.now
                    .splice(0, action.payload)
                    .concat(state.now.splice(action.payload+1, state.now.length))
            }
        default:
            throw new Error();
    }
}

export const ListContextProvider = (props : any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <NowContext.Provider value={[state, dispatch]}>
        {props.children}
      </NowContext.Provider>
    );
  };