import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AppContext } from '../../../context/appState';
import { CountriFlag, Touchable } from '../../shared/StyledComponets';

const CountriCard = ({
    item,
    index,
    navigation
}) => {
    const { isDark } = useContext(AppContext)
    return (
        <Touchable
            isDark={isDark}
            onPress={() => navigation.navigate("Details", item)}
        >
            <Image
                source={{ uri: item.flags.png }}
                resizeMode="stretch"
                style={{
                    width: "100%",
                    height: 250
                }}
            />
            {/* <View style={{ height: 200, justifyContent: "center", alignItems: "center", marginVertical: 2 }}>
                <Text>{item.name.official}</Text>
            </View> */}
        </Touchable>
    );
}
export default CountriCard;