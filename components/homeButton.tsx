import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const HomeButton: React.FC<RouterProps> = ({ navigation }) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DespesasFixas')}>
                <Text style={styles.buttonText}>Ver Mais</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'flex-end',
        margin: 16,
    },
    button: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 5,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#000', // Button text color
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'segoe-ui',
    },
});

export default HomeButton;
