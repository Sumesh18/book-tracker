import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    reading: localStorage.getItem('reading') ? JSON.parse(localStorage.getItem('reading')) : [],
    finished: localStorage.getItem('finished') ? JSON.parse(localStorage.getItem('finished')) : [],
    willRead: JSON.parse(localStorage.getItem('willRead')) || []
}

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('reading', JSON.stringify(state.reading))
        localStorage.setItem('finished', JSON.stringify(state.finished))
        localStorage.setItem('willRead', JSON.stringify(state.willRead))
    }, [state])

    // actions
    const addBookToReading = (book) => {
        dispatch({
            type: 'ADD_TO_READING',
            payload: book
        })
    }

    const removeBookFromReading = (id) => {
        dispatch({
            type: 'REMOVE_FROM_READING',
            payload: id
        })
    }

    const addBookToFinished = (book) => {
        dispatch({
            type: 'ADD_TO_FINISHED',
            payload: book
        })
    }

    const addBookToWillRead = (book) => {
        dispatch({
            type: 'ADD_TO_WILLREAD',
            payload: book
        })
    }

    const moveBookToReading = (book) => {
        dispatch({
            type: 'MOVE_TO_READING',
            payload: book
        })
    }

    const removeBookFromFinished = (id) => {
        dispatch({
            type: 'REMOVE_FROM_FINISHED',
            payload: id
        })
    }

    const moveBookToFinished = (book) => {
        dispatch({
            type: 'MOVE_TO_FINISHED',
            payload: book
        })
    }

    const removeBookFromWillRead = (id) => {
        dispatch({
            type: 'REMOVE_FROM_WILLREAD',
            payload: id
        })
    }

    const moveBookToWillRead = (book) => {
        dispatch({
            type: 'MOVE_TO_WILLREAD',
            payload: book
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                reading: state.reading,
                finished: state.finished,
                willRead: state.willRead,
                addBookToReading,
                removeBookFromReading,
                addBookToFinished,
                addBookToWillRead,
                moveBookToReading,
                removeBookFromFinished,
                moveBookToFinished,
                removeBookFromWillRead,
                moveBookToWillRead
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}