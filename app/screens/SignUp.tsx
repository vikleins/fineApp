import { View, Text , StyleSheet, TextInput, ActivityIndicator, Button} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const Login = ({ navigation }: any) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response);
            alert('Cheque seu E-Mail!')
        } catch(error: any){
            console.log(error)
            alert('O cadastro falou com o erro:' + error.message)
        } finally{
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Cadastre-se
                </Text>
                <Text style={styles.subTitle}>
                    Insira seus Dados
                </Text>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}/>
                     <TextInput value={name} style={styles.input} placeholder='Nome' autoCapitalize='none' onChangeText={(text)=> setName(text)}/>
                <TextInput value={password} style={styles.input} placeholder='Senha' secureTextEntry={true} autoCapitalize='none' onChangeText={(text)=> setPassword(text)}/>

                {loading ? <ActivityIndicator size="large" color="#0000ff" />
                 : <>
                 
                 <Button title="Criar conta" onPress={signUp}/>
                </> }
       
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
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000000'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'left'
    }
    
}
)
