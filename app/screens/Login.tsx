import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login = () => {
    return (
        <View style={styles.container}>
            <Header />
                
            <Footer />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    
}
)
