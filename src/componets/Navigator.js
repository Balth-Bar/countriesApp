import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from '../views/details';
import Seeker from '../views/seeker';
import { useCountries } from '../hooks/reactQueryHooks';
import Load from '../views/load';
import { AppContext } from '../../context/appState';

const Stack = createNativeStackNavigator();

const Searcher = ({

}) => {
    const { data, isLoading, isSuccess } = useCountries();
    const { setApiData } = useContext(AppContext)

    useEffect(() => {
        if (isSuccess) {
            setApiData(data)
        }
    }, [isSuccess])

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Seeker'
            >
                {!isSuccess ? (
                    <Stack.Screen name="Load" component={Load} />

                ) : (
                    <>
                        <Stack.Screen name="Seeker" component={Seeker} />
                        {/* <Stack.Screen name="Details" component={Details} /> */}
                    </>
                )
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Searcher;
