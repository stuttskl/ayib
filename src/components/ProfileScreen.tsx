import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Profile: {name: string; route: string};
    Feed: {sort: 'latest' | 'top'} | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({navigation, route}: Props) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
