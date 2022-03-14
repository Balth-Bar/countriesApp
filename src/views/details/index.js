import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCountrie } from '../../hooks/reactQueryHooks';


const Details = ({ route }) => {
    const [countri, setCountri] = useState(route.params);
    const [borders, setBorders] = useState(countri?.borders || []);
    const results = useCountrie(borders);

    if (results.some(r => r.isLoading)) return <Text>Cargando</Text>
    if (results.some(r => r.isError)) {
        const first = results.find(r => r.error)
        return <Text>error</Text>
    }

    const values = results.reduce((m, r) => [...m, ...r.data.data], [])
    console.log(values.length)
    return (
        <View>
            <Text>{countri.name.official}</Text>
            {values && values.map((value, index) =>
                <TouchableOpacity
                    key={index}
                    onPress={() => { setCountri(value); setBorders(value?.borders || []) }}
                >
                    <View >
                        <Text>{value.name.common}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Details;