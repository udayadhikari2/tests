import { createContext } from "react"

const AppContext = createContext();  // create context

const AppProvider = ({ children }) => {     
    // provider provide the data to the consumer add the <AppProvider> before <App> component
    const data = {      // data used globally
        name : "Uday Adhikari",
        email : "uday.adhikari2@gmail.com",

    };
    return
    <AppContext.Provider value={data} >{children}</AppContext.Provider>   // return the AppContext.provide with attribute data and children props
};

export { AppContext, AppProvider };  // export
