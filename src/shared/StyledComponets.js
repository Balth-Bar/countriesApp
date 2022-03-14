import styled from 'styled-components/native'

const Tuna = "#303444"
const Shark = "#282C34"
const RoseWhite = "#FAF9F9"
const white = "#ffffff"
const Black = "#000000"

export const Touchable = styled.TouchableOpacity`
    background-color: ${props => (props.isDark ? Tuna : white)};
    width: 80%;
    display: flex;
    align-self: center;
    border-radius:5px;
    margin-bottom: 5%;
`

export const HeaderView = styled.View`
    background-color: ${props => (props.isDark ? Tuna : white)};
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100px;
    height: 40px;
    padding: 10px 0px;

`
export const HeaderText = styled.Text`
    color: ${props => (props.isDark ? white : Black)};
    font-weight: bold;
    font-size: 18px;
`

export const HeaderButtonText = styled.Text`
    color: ${props => (props.isDark ? white : Black)};
`

export const ViewContent = styled.View`
    background-color: ${props => (props.isDark ? Shark : RoseWhite)};
`
export const TextInputStyle = styled.TextInput`
    background-color: ${props => (props.isDark ? Shark : RoseWhite)};
    display: flex;
    align-self: center;
    margin-top: 3%;
    padding: 5px;
    width: 80%;

`

