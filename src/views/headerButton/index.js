import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { AppContext } from '../../../context/appState';
import { HeaderButtonText, HeaderText, HeaderView } from '../../shared/StyledComponets';

const HeaderButton = ({

}) => {

    const { setDarkMode, isDark } = useContext(AppContext)
    return (

        <TouchableOpacity
            onPress={() => setDarkMode(!isDark)}
        >
            <HeaderView isDark={isDark}>
                <Ionicons name="moon" size={20} color={isDark ? "white" : "black"} />
                <HeaderButtonText isDark={isDark}>
                    Dark Mode
                </HeaderButtonText>
            </HeaderView>

        </TouchableOpacity>

    );
}
export default HeaderButton;