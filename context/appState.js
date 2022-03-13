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
            }
        },
        {
            showData: [],
            apiData: []
        }
    )

    const authContext = useMemo(
        () => ({
            setApiData: (apiData) => dispatch({ type: 'SET_API_DATA', apiData }),
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