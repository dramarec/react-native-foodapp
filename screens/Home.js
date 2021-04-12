import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = ({navigation}) => {
    return (
        <View>
            <Text> Home</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
});
export default Home;
