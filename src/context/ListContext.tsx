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
            if (action.payload) {
                return {
                    now: [...state.now, action.payload]
                }
            }
        case 'DEL_NOW_TASK':
            const newList = state.now.filter((item, index) => index !== action.payload);
            return {
                ...state,
                now: newList,
            }
        case 'EDIT_NOW_TASK':
            state.now[action.payload.index] = action.payload.value;
            console.log(`test edit: ${JSON.stringify(state)} + ${action.payload.value}`);
            return {
                ...state,
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

    const editTask = (index: rnumber, value: string) => {
        dispatch({
            type: 'EDIT_NOW_TASK',
            payload: {
                value: value,
                index: index,
            },
        })
    }

    const deleteTask = (index: number) => {
        dispatch({
            type: 'DEL_NOW_TASK',
            payload: index,
        })
    }
    return (
      <NowContext.Provider 
        value={{
            state, 
            dispatch,
            addTask, 
            editTask,
            deleteTask,
        }}>
        {props.children}
      </NowContext.Provider>
    );
  };