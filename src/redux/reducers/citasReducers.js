import { typesAgendar } from "../types/types"


const initialState = {
    agendaCitas: []
}

export const citasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesAgendar.add:
            return {
                agendaCitas: [...state.agendaCitas, action.payload]
            }
        case typesAgendar.delete:
            return {
                agendaCitas: state.agendaCitas.filter(c => c.email !== action.payload)
            }
        case typesAgendar.list:
            return {
                agendaCitas: [...action.payload]
            }
        case typesAgendar.edit:
                return {
                  ...state
            }
        default:
            return state
    }

}