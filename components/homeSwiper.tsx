import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationProp } from '@react-navigation/native';
import ButtonHome from './homeButton';

interface SwiperProps {
    items: { id: string; title: string }[];
    title: string;
    navigation: NavigationProp<any, any>; // Include navigation prop
}

const HomeSwiper: React.FC<SwiperProps> = ({ items, title, navigation }) => {
    return (
        <View style={styles.div_container}>
            <Text style={styles.title}>{title}</Text>
            <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false} scrollEnabled={false}>
                {items.map((item) => (
                    <View key={item.id} style={styles.slide}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={styles.value_text}>R$ XXX.XX</Text>
                    </View>
                ))}
            </Swiper>
            <ButtonHome navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    div_container: {
        padding: 24,
        shadowColor: '#000',
        height: 256,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        fontFamily: 'segoe-ui',
    },
    wrapper: {
        height: 256,
        marginBottom: 16,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        paddingLeft: 48,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'segoe-ui',
        paddingBottom: 24,
    },
    value_text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'segoe-ui',
    },
});

export default HomeSwiper;