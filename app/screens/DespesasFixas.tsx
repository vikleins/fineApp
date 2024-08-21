import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any,any>;
}

const DespesasFixas =  ({navigation}: RouterProps) => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello</Text>
            </View>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
        </View>
        
    );
}

export default DespesasFixas;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'flex-start'
    },
    headerText:{

    },
})