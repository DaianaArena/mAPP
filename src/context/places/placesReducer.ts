/*
Las acciones que nosotros podemos ejecutar
para devolver un estado de nuestro contexto

Es una fx pura que recibe state,action y devuelve un state
*/

import { PlacesState } from "./PlacesProvider";

type PlacesAction =
| { type: "setUserLocation"; payload: [number, number] }

export const placesReducer = (state: PlacesState, action: PlacesAction):PlacesState =>{
    switch (action.type) {
        case "setUserLocation":
            return {
                ...state,
                isLoading: false,
                userLocation:action.payload
            }
    
        default:
            return state
    }
    
}