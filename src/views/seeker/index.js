import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { AppContext } from '../../../context/appState';
import InputPiker from './InputPiker';

const Seeker = ({

}) => {

    const { apiData, findCountries, setFindCountries } = useContext(AppContext)
    const [showData, setShowData] = useState([]);
    const [position, setPosition] = useState(0);
    const [Onetime, setOneTime] = useState(true);
    const [loading, setLoading] = useState();
    const [regionContries, setRegionContries] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);


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
            <View style={{ height: 200, justifyContent: "center", alignItems: "center", backgroundColor: "#CCC", marginVertical: 2 }}>
                <Text>{item.name.official}</Text>
            </View>
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
        <View >

            <TextInput
                placeholder='Usuario'
                onChangeText={(text) => serchCountrie(text)}
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
                data={showData}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
            />
        </View>
    );


}

export default Seeker;