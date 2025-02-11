"use client"
import {createContext,useContext,useState} from 'react'

interface DarkModeContextType {
    isDarkMode: boolean,
    toggleDarkMode: () => void,
  
}
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined) 
interface DarkModeProviderProps {
  children: React.ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {

    const [darkMode, setDarkMode] = useState<boolean>(false);
    const toggleDarkMode = () => setDarkMode((prev)=> !prev); 
  return (
    <DarkModeContext.Provider value={{isDarkMode: darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(!context) throw new Error("useDarkMode is use in DarkProvider only")
        return context
}