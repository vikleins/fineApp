import { Image, View, StyleSheet, SafeAreaView } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/png/logo.png')} />
            </View>
        </SafeAreaView>
        
    )
}

export default Header;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        width: '100%',
        
    },
    container: {
        backgroundColor: '#29628f',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: 79,
        paddingTop: 15
    },
    img: {
        width: 24,
        height: 24
    }
}
   
)
