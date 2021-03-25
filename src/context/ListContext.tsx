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
        case 'EDIT_NOW_TASK':
            state.now[action.index] = action.value
            return {
                now: [...state.now]
            }
        default:
            throw new Error();
    }
}

export const ListContextProvider = (props : any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addTask = (task : string) => {
        dispatch({
            type: 'ADD_NOW_TASK',
            payload: task,
        })
    }

    const editTask = (index: number, value: string) => {
        dispatch({
            type: 'EDIT_NOW_TASK',
            payload: value,
            index: index,
        })
    }
    return (
      <NowContext.Provider 
        value={{
            state, 
            dispatch,
            addTask, 
            editTask,
        }}>
        {props.children}
      </NowContext.Provider>
    );
  };