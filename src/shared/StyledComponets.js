import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const deviceheight = Dimensions.get("window").height;

const Tuna = "#303444"
const Shark = "#282C34"
const RoseWhite = "#FAF9F9"
const white = "#ffffff"
const Black = "#000000"

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}



export const Touchable = styled.TouchableOpacity`
    background-color: ${props => (props.isDark ? Tuna : white)};
    width: 70%;
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
    min-height:${deviceheight.toFixed(0) + "px"}; ;

`
export const TextInputStyle = styled.TextInput`
    background-color: ${props => (props.isDark ? Shark : RoseWhite)};
    display: flex;
    align-self: center;
    margin-top: 3%;
    padding: 5px;
    width: 80%;
`

export const CountriFlag = styled.Image`
    width: ${props => (props.detail ? "90%" : "100%")};
    margin-top: ${props => (props.detail ? "50px" : "0%")};
    height: 200px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    align-self: center;
`;
export const CardGroup = styled.View`
    display: flex;
    width: 90%;
    align-self: center;
    margin-bottom: 40px;
`

export const CardTitleText = styled.Text`
    color: ${props => (props.isDark ? white : Black)};
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0px;
`

export const CardText = styled.Text`
    color: ${props => (props.isDark ? white : Black)};
    font-weight: ${props => (props.isBold ? "bold" : "normal")};
    padding: 5px;
    margin-left: ${props => (props.isAlone ? "5%" : "0px")};
`


export const CountriButton = styled.TouchableOpacity`
    background-color: ${props => (props.isDark ? Tuna : white)};
    width: 27%;
    border-radius: 5px;
`

export const ButtosContent = styled.View`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-self: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const LoadContainer = styled.View`
    background-color: ${props => (props.isDark ? Shark : RoseWhite)};
    min-height:${deviceheight.toFixed(0) + "px"}; ;
    display: flex;
    justify-content: center;
`

