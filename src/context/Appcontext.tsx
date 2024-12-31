"use client"
import { createContext, useState } from "react";

interface AppContextType {
    contchaeck: number;
    setcontchaeck?: (value: number) => void;
}

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = (props: any) => {
    const [contchaeck, setcontchaeck] = useState(5);
    return (
        <AppContext.Provider value={{ contchaeck, setcontchaeck}}>
            {props.children}
        </AppContext.Provider>
    )
}