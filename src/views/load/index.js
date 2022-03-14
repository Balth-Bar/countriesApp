import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadContainer } from '../../shared/StyledComponets';

const Load = ({

}) => {

    return (
        <LoadContainer>
            <ActivityIndicator size="large" color="#aaa" />
        </LoadContainer>
    );
}
export default Load;