import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { AppContext } from '../../../context/appState';
import { formatQuantity } from '../../helper';
import { useCountrie } from '../../hooks/reactQueryHooks';
import { ButtosContent, CardGroup, CardText, CardTitleText, CountriButton, CountriFlag, DetailGroup, LoadContainer, ViewContent } from '../../shared/StyledComponets';


const Details = ({ route }) => {
    const [countri, setCountri] = useState(route.params);
    const [borders, setBorders] = useState(countri?.borders || []);
    const results = useCountrie(borders);
    const { isDark } = useContext(AppContext)

    if (results.some(r => r.isLoading)) return <LoadContainer isDark={isDark}><ActivityIndicator size="large" color="#aaa" /></LoadContainer>
    if (results.some(r => r.isError)) {
        const first = results.find(r => r.error)
        return <Text>error</Text>
    }


    const values = results.reduce((m, r) => [...m, ...r.data.data], [])
    const currencies = Object.values(countri.currencies).reduce((acc, currency, index) => index === 0 ? (currency.name) : (acc + ", " + currency.name), "")
    const languages = Object.values(countri.languages).reduce((acc, language, index) => index === 0 ? (language) : (acc + ", " + language), "")


    return (
        <ScrollView>
            <ViewContent isDark={isDark} >

                <CountriFlag
                    detail={true}
                    source={{ uri: countri.flags.png }}
                    resizeMode="stretch"
                />

                <CardGroup>
                    <CardTitleText isDark={isDark}>
                        {countri.name.common}
                    </CardTitleText>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Population:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {formatQuantity(countri.population)}
                        </CardText>
                    </Text>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Region:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {countri.region}
                        </CardText>
                    </Text>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Sub Region:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {countri.subregion}
                        </CardText>

                    </Text>

                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Capital:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {countri.capital}
                        </CardText>

                    </Text>

                </CardGroup>

                <CardGroup>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Top Level Domain:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {countri.tld[0]}
                        </CardText>
                    </Text>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Currencies:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {currencies}
                        </CardText>
                    </Text>
                    <Text>
                        <CardText isDark={isDark} isBold={true}>
                            Languages:{" "}
                        </CardText>
                        <CardText isDark={isDark}>
                            {languages}
                        </CardText>

                    </Text>

                </CardGroup>
                <CardText isDark={isDark} isBold={true} isAlone={true}>
                    Border Countries:
                </CardText>
                <ButtosContent>
                    {values && values.map((value, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => { setCountri(value); setBorders(value?.borders || []) }}

                        >
                            <View
                                style={{
                                    backgroundColor: isDark ? "#303444" : "#FFF",
                                    minWidth: 100,
                                    height: 40,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 11.14,
                                    elevation: 17,
                                    alignItems: "center",
                                    margin: 5,
                                    borderRadius: 5,
                                    justifyContent: "center"
                                }}
                            >
                                <CardText isDark={isDark}>{value.name.common}</CardText>
                            </View>
                        </TouchableOpacity>
                    )}
                </ButtosContent>
            </ViewContent>
        </ScrollView>

    );
}

export default Details;