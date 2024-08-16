import { View, Text , StyleSheet, TextInput, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FIREBASE_AUTH } from '../../firebaseConfig'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const auth = FIREBASE_AUTH
    

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}/>
                <TextInput value={password} style={styles.input} placeholder='Senha' secureTextEntry={true} autoCapitalize='none' onChangeText={(text)=> setPassword(text)}/>

                {/* {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Button title="" />} */}
            </View>
                
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
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 256,
        width: 256,
        gap: 8,
        textAlign: 'center',
        marginHorizontal: 'auto'
    },
    input: {
        width: '100%',
        maxHeight: 40,
        backgroundColor: '#E1DFE1',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: '#000000',
        fontSize: 16,
        fontWeight: '200'
    }
    
}
)
