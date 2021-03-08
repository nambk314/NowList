import React from 'react';
import {
    Text,
    Alert
} from 'react-native';

import {
    Button,
} from 'react-native-elements'

const LockButton = () => {
    return (
        <Button
            title="Lock"
            onPress={() => Alert.alert('Lock the screen')}
        />
    )
}
export default LockButton;