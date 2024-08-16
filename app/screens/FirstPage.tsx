import React from 'react'
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'

const FirstPage = ({ navigation }: any) => {

    return(
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image style={styles.img} source={require('../../assets/png/firstPage/first_half_logo.png')} />
            <Text  style={styles.text}>FineApp</Text>
            <Image style={styles.img} source={require('../../assets/png/firstPage/second_half_logo.png')} />
            {/* <Text  style={styles.text}>FineApp</Text>
            <Text  style={styles.text}>FineApp</Text>
            <Text  style={styles.text}>FineApp</Text> */}
        </View>
       
        
        
        <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
            <Text style={styles.textButton}>Realizar Log-In</Text>
        </Pressable>
    </View>
    )
    
}

    
export default FirstPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29628f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 63

    },
    text: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        width: 72,
        height: 21,
        textAlign: 'center'
    },
    img: {
        width: 20,
        height: 41,
    },
    button: {
        backgroundColor: '#D9D9D9',
        flex: 1,
        width: 128,
        height: 24,
        maxHeight:24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
        
    },
    textButton: {
        fontWeight: '400',
        color: '#00000',
        fontSize: 12,
        
    }

})


