/*
El context es lo que nosotros mostramos a otros componentes
*/

import { createContext } from "react";

export interface PlacesContext {
    isLoading: boolean;
    userLocation?:[number, number]
}

const INITIAL_STATE: PlacesContext = {
    isLoading: true,
    userLocation: undefined
}

export const PlacesContext = createContext<PlacesContext>(INITIAL_STATE);