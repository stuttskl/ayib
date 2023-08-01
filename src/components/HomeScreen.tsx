import * as React from 'react';
import {Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Profile: {name: string};
    Feed: {sort: 'latest' | 'top'} | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
    );
};

export default HomeScreen;
