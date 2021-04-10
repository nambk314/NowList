import React, { useReducer, createContext } from 'react'

export const NowContext = createContext({});

const initialState = {
    now: [
        {
            content: 'task 1',
            done: false,
        },
    ], 
    archive: [
        {
            content: 'archive task',
            done: false,
        },
    ],
    loading: false,
    error: null,
}

const reducer = (state : any, action : any) => {
    switch (action.type) {
        case 'ADD_NOW_TASK':
            if (action.payload) {
                return {
                    ...state,
                    now: [
                        ...state.now, 
                        {
                            content: action.task,
                            done: false,
                        }
                    ]
                }
            }
        case 'DEL_NOW_TASK':
            const newList = state.now.filter((item, index) => index !== action.payload);
            return {
                ...state,
                now: newList,
            }
        // We can't edit tasks that are already done
        case 'EDIT_NOW_TASK':
            state.now[action.payload.index] = {
                content: action.payload.task.content,
                done: action.payload.task.done,
            }
            return {
                ...state,
                now: [...state.now]
            }
        case 'MOVE_NOW_TO_ARCHIVE':
            const archiveItem = state.now[action.index];
            const nowList = state.now.filter((item, index) => index !== action.index);
            state.archive.push(archiveItem);
            return {
                ...state,
                now: nowList,
                archive: [...state.archive],
            }
        case 'MOVE_ARCHIVE_TO_NOW':
            const nowItem = state.archive[action.index];
            const archiveList = state.archive.filter((item, index) => index !== action.index);
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
            task,
        })
    }

    const editTask = (index: number, task: any) => {
        dispatch({
            type: 'EDIT_NOW_TASK',
            payload: {
                task,
                index,
            },
        })
    }

    const deleteTask = (index: number) => {
        dispatch({
            type: 'DEL_NOW_TASK',
            index,
        })
    }

    const moveNowToArchive = (index: number) => {
        dispatch({
            type: 'MOVE_NOW_TO_ARCHIVE',
            index,
        })
    }

    const moveArchiveToNow = (index: number) => {
        dispatch({
            type: 'MOVE_ARCHIVE_TO_NOW',
            index,
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