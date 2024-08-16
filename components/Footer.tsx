import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    // const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.text}>FineApp©</Text>
            <Text  style={styles.text}>2024</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 70,
        width: '100%'
    },
    text: {
        fontSize: 16,
        fontWeight: '200',
        color: '#000000'
    }
})
