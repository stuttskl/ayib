import * as React from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
    return (
        <View>
            <Text>A Year In Books</Text>
            <Button
                title="Go to profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Go to dashboard"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
};

export default HomeScreen;
