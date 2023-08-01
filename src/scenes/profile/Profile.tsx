import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Profile: {name: string; route: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
    return <Text>This is profile</Text>;
};

export default ProfileScreen;
