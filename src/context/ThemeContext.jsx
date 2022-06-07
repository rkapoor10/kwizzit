import React, { createContext, useContext, useState } from "react"

// create context
const ThemeContext = createContext({})

// provide context
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


// useContext
const useTheme = () => useContext(ThemeContext)


// export context
export {useTheme, ThemeProvider}