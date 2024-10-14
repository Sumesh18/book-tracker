export default (state, action) => {
    switch(action.type){
        case 'ADD_TO_READING':
            return {
                ...state,
                reading: [action.payload, ...state.reading]
            }
        case 'REMOVE_FROM_READING':
            return {
                ...state,
                reading: state.reading.filter(book => book.id !== action.payload)
            }
        case 'ADD_TO_FINISHED':
            return {
                ...state,
                reading: state.reading.filter(book => book.id !== action.payload.id),
                finished: [action.payload, ...state.finished]
            }
        case 'ADD_TO_WILLREAD':
            return {
                ...state,
                reading: state.reading.filter(book => book.id !== action.payload.id),
                willRead: [action.payload, ...state.willRead]
            }
        case 'MOVE_TO_READING':
            return {
                ...state,
                finished: state.finished.filter(book => book.id !== action.payload.id),
                willRead: state.willRead.filter(book => book.id !== action.payload.id),
                reading: [action.payload, ...state.reading]
            }
        case 'REMOVE_FROM_FINISHED':
            return {
                ...state,
                finished: state.finished.filter(book => book.id !== action.payload)
            }
        case 'MOVE_TO_FINISHED':
            return {
                ...state,
                reading: state.reading.filter(book => book.id !== action.payload.id),
                willRead: state.willRead.filter(book => book.id !== action.payload.id),
                finished: [action.payload, ...state.finished]
            }
        case 'REMOVE_FROM_WILLREAD':
            return {
                ...state,
                willRead: state.willRead.filter(book => book.id !== action.payload)
            }
        case 'MOVE_TO_WILLREAD':
            return {
                ...state,
                reading: state.reading.filter(book => book.id !== action.payload.id),
                finished: state.finished.filter(book => book.id !== action.payload.id),
                willRead: [action.payload, ...state.willRead]
            }
        default:
            return state
    }
}