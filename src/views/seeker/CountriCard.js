import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Svg from 'react-native-svg';
import { AppContext } from '../../../context/appState';
import { formatQuantity } from '../../helper';
import { CardGroup, CardText, CardTitleText, CountriFlag, Touchable } from '../../shared/StyledComponets';


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

            <CountriFlag
                source={{ uri: item.flags.png }}
                resizeMode="stretch"
            />
            <CardGroup>
                <CardTitleText tleText isDark={isDark}>
                    {item.name.common}
                </CardTitleText>
                <Text>
                    <CardText isDark={isDark} isBold={true}>
                        Population:{" "}
                    </CardText>
                    <CardText isDark={isDark}>
                        {formatQuantity(item.population)}
                    </CardText>
                </Text>
                <Text>
                    <CardText isDark={isDark} isBold={true}>
                        Region:{" "}
                    </CardText>
                    <CardText isDark={isDark}>
                        {item.region}
                    </CardText>
                </Text>
                <Text>
                    <CardText isDark={isDark} isBold={true}>
                        Capital:{" "}
                    </CardText>
                    <CardText isDark={isDark}>
                        {item.capital}
                    </CardText>

                </Text>
            </CardGroup>

        </Touchable>
    );
}
export default CountriCard;