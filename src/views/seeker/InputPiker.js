import React, { useState, useEffect, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useRegion } from '../../hooks/reactQueryHooks';
import { AppContext } from '../../../context/appState';


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
    const { setFindCountries } = useContext(AppContext)
    // const [enable, setEnable] = useState(true);

    useEffect(() => {
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

    }, [isFetching, filter])

    return (
        <Picker
            onValueChange={(valor) => {
                setFilter(valor)
                // setEnable(false)
                // setTimeout(() => setEnable(true), 1000);
            }}
            selectedValue={filter}
            mode={"dropdown"}
        // enabled={enable}
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

