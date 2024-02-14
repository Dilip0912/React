import {createContext,useContext } from "react";
import React from 'react'

export const ThemeContext=React.createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}