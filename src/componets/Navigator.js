import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from '../views/details';
import Seeker from '../views/seeker';
import { useCountries } from '../hooks/reactQueryHooks';
import Load from '../views/load';
import { AppContext } from '../../context/appState';
import HeaderButton from '../views/headerButton';
import { HeaderText } from '../shared/StyledComponets';

const Stack = createNativeStackNavigator();

const HederOptions = {
    headerRight: () => <HeaderButton />
}


const Searcher = ({

}) => {
    const { data, isLoading, isSuccess } = useCountries();
    const { setApiData, isDark } = useContext(AppContext)
    useEffect(() => {
        if (isSuccess) {
            setApiData(data)
        }
    }, [isSuccess])

    return (
        <>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Seeker'
                    screenOptions={{
                        headerBackButtonMenuEnabled: false,
                        headerTitle: () => <HeaderText isDark={isDark}>Where in the world?</HeaderText>,
                        headerStyle: {
                            backgroundColor: isDark ? '#303444' : "#FFF",
                        },
                    }}

                >
                    {!isSuccess ? (
                        <Stack.Screen name="Load" component={Load} />

                    ) : (
                        <>
                            <Stack.Screen options={HederOptions} name="Seeker" component={Seeker} />
                            <Stack.Screen options={HederOptions} name="Details" component={Details} />
                        </>
                    )
                    }

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Searcher;
