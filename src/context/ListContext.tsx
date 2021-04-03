import React, { useReducer, createContext } from 'react'

export const NowContext = createContext({});

const initialState = {
    now: [
        'Task 1',
        'Task 2',
        'Task 3',
    ], 
    archive: [
        'Archive task',
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
            return {
                ...state,
                now: [...state.now]
            }
        case 'MOVE_NOW_TO_ARCHIVE':
            const archiveItem = state.now[action.payload];
            const nowList = state.now.filter((item, index) => index !== action.payload);
            state.archive.push(archiveItem);
            console.log(JSON.stringify(state));
            console.log(archiveItem);
            return {
                ...state,
                now: nowList,
                archive: [...state.archive],
            }
        case 'MOVE_ARCHIVE_TO_NOW':
            const nowItem = state.archive[action.payload];
            const archiveList = state.archive.filter((item, index) => index !== action.payload);
            state.now.push(nowItem);            
            return {
                ...state,
                now: [...state.now],
                archive: archiveList,
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

    const moveNowToArchive = (index: number) => {
        dispatch({
            type: 'MOVE_NOW_TO_ARCHIVE',
            payload: index,
        })
    }

    const moveArchiveToNow = (index: number) => {
        dispatch({
            type: 'MOVE_ARCHIVE_TO_NOW',
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
            moveNowToArchive,
            moveArchiveToNow,
        }}>
        {props.children}
      </NowContext.Provider>
    );
  };