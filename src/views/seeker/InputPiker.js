import React, { useState, useEffect, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useRegion } from '../../hooks/reactQueryHooks';
import { AppContext } from '../../../context/appState';
import { View } from 'react-native';


const InputPiker = ({
    setShowData,
    setOneTime,
    Onetime,
    setPosition,
    setIsFiltering,
    setRegionContries
}) => {
    const [filter, setFilter] = useState("");
    const { data, isFetching } = useRegion(filter);
    const { setFindCountries, isDark } = useContext(AppContext)

    useEffect(() => {
        if (!isFetching) {
            if (filter == "") {
                setIsFiltering(false)
            } else {
                setIsFiltering(true)
            }
            if (data) {
                setShowData([])
                setRegionContries(data)
                setFindCountries(data)
                setPosition(0)
                setOneTime(!Onetime)
            } else {
                setShowData([])
                setFindCountries([])
                setPosition(0)
                setOneTime(!Onetime)
            }
        }
    }, [isFetching, filter])

    return (

        <Picker
            onValueChange={(valor) => {
                setFilter(valor)
            }}
            selectedValue={filter}

            mode={"dropdown"}
            style={{
                backgroundColor: isDark ? "#303444" : "#FFFCFC",
                marginVertical: 30,
                width: "40%",
                height: 50,
                paddingLeft: 10,
                marginLeft: "5%",
                fontSize: 14,
                borderRadius: 5,
                color: isDark ? "#fff" : "#000",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.5,
                shadowRadius: 11.14,
                elevation: 17,
            }}
        >
            <Picker.Item label="All" value="" />
            <Picker.Item label="Africa" value="africa" />
            <Picker.Item label="America" value="america" />
            <Picker.Item label="Asia" value="asia" />
            <Picker.Item label="Europe" value="europe" />
            <Picker.Item label="Oceania" value="oceania" />

        </Picker>


    );
}
export default InputPiker;

