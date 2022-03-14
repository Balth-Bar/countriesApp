import React, { useReducer, useMemo, createContext } from "react"

export const AppContext = createContext()


const AppState = (props) => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SET_API_DATA':
                    return {
                        ...prevState,
                        apiData: action.apiData
                    };
                case 'SET_API_DATA':
                    return {
                        ...prevState,
                        findCountries: action.findCountries
                    };

                case 'SET_FIND_COUNTRIES':
                    return {
                        ...prevState,
                        findCountries: action.findCountries
                    };
                case 'SET_DARK':
                    return {
                        ...prevState,
                        isDark: action.color
                    };

            }
        },
        {
            isDark: false,
            apiData: [],
            findCountries: [],
        }
    )

    const authContext = useMemo(
        () => ({
            setApiData: (apiData) => dispatch({ type: 'SET_API_DATA', apiData }),
            setFindCountries: (findCountries) => dispatch({ type: 'SET_FIND_COUNTRIES', findCountries }),
            setDarkMode: (color) => dispatch({ type: 'SET_DARK', color })
        }),
        []
    );


    return (
        <AppContext.Provider value={{
            ...authContext,
            ...state
        }}>

            {props.children}
        </AppContext.Provider>
    )

}

export default AppState