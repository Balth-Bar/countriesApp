import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';

import { AppContext } from '../../../context/appState';
import { TextInputStyle, Touchable, ViewContent } from '../../shared/StyledComponets';
import CountriCard from './CountriCard';
import InputPiker from './InputPiker';

const Seeker = ({
    navigation
}) => {

    const { apiData, findCountries, setFindCountries, isDark } = useContext(AppContext)
    const [showData, setShowData] = useState([]);
    const [position, setPosition] = useState(0);
    const [Onetime, setOneTime] = useState(true);
    const [loading, setLoading] = useState();
    const [regionContries, setRegionContries] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    const [color, setColor] = useState();

    useEffect(() => {
        let slice = []

        if (findCountries.length !== 0) {
            slice = findCountries.slice(position, position + 10)
            setPosition(position + 10)
            setShowData([...showData, ...slice])
            setLoading(false)
            return
        }
        slice = apiData.slice(position, position + 10)
        setPosition(position + 10)
        setShowData([...showData, ...slice])
        setLoading(false)
    }, [loading, apiData, Onetime])


    const serchCountrie = (e) => {
        let countries = []
        if (!isFiltering) {
            countries = apiData.filter((countrie) => countrie.name.official.toLowerCase().includes(e.toLowerCase()))
        } else {
            countries = regionContries.filter((countrie) => countrie.name.official.toLowerCase().includes(e.toLowerCase()))
        }
        if (countries.length > 0) {
            setPosition(0)
            setShowData([])
            setFindCountries(countries)
            setLoading(true)
        } else {
            setShowData([])
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <CountriCard item={item} index={index} navigation={navigation} />
        )
    }

    const renderLoader = () => {
        return (
            loading ?
                <View >
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    const loadMoreItem = () => {
        setLoading(true)
    };

    return (
        <ViewContent isDark={isDark} >
            <TextInput
                style={{
                    backgroundColor: isDark ? "#303444" : "#FFFCFC",
                    marginTop: 20,
                    width: "90%",
                    height: 50,
                    alignSelf: "center",
                    fontSize: 14,
                    borderRadius: 5,
                    paddingLeft: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 11.14,
                    elevation: 17,
                    color: isDark ? "#FFF" : "#000"
                }}

                placeholder='Search for a country...'
                onChangeText={(text) => serchCountrie(text)}
                placeholderTextColor={isDark ? "#FFF" : "#000"}

            />
            <InputPiker
                setShowData={setShowData}
                setOneTime={setOneTime}
                setPosition={setPosition}
                Onetime={Onetime}
                setIsFiltering={setIsFiltering}
                setRegionContries={setRegionContries}
            />
            <FlatList
                style={{ marginBottom: 100 }}
                data={showData}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
            />
        </ViewContent>
    );


}

export default Seeker;