import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { AppContext } from '../../../context/appState';
import { useCountries, useRegion } from '../../hooks/reactQueryHooks';
import { Picker } from '@react-native-picker/picker';

const Seeker = ({

}) => {

    const { apiData } = useContext(AppContext)
    const [showData, setShowData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState(0);
    const [findCountries, setFindCountries] = useState([]);

    const [filtro, setFiltro] = useState();



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

    }, [loading, apiData])

    const serchCountrie = (e) => {
        let findCountries = apiData.filter((countrie) => countrie.name.official.toLowerCase().includes(e.toLowerCase()))
        if (findCountries.length > 0) {
            setPosition(0)
            setShowData([])
            setFindCountries(findCountries)
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


            <Picker
                onValueChange={(valor) => setFiltro(valor)}
                selectedValue={filtro}
                mode={"dropdown"}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

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