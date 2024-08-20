import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { meses, despesasFixas ,despesasUsuais } from '../../core/dataFake';
import HideValue from '../../assets/svg/hideValue.svg'
import LineGraph from '../../assets/svg/line-graph.svg'
import RoundGraph from '../../assets/svg/round-graph.svg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SwiperHome from '../../components/homeSwiper';

interface HomeProps {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>

            <Header/>

            <View style={styles.saldo_container}>
                <View style={styles.saldo_text_container}>
                    <Text style={styles.saldo_text}>Saldo</Text>
                    <Text style={styles.saldo_value}>R$ XXX.XX</Text>
                </View>
                <View style={styles.hidden}>
                    <HideValue width={32} height={32}></HideValue>
                </View>
            </View>

             <View style={styles.content_container}>
                <SwiperHome items={meses} title="Balanço Mensal" navigation={navigation} />
            </View>
            <SwiperHome items={despesasFixas} title="Despesas Fixas" navigation={navigation} />
            <View style={styles.content_container}>
                <SwiperHome items={despesasUsuais} title="Despesas Usuais" navigation={navigation} />
            </View>
            <SwiperHome items={meses} title="Receitas" navigation={navigation} />

            <View style={styles.finances_container}>

                    <Text style={styles.title}> Finanças para Você </Text>
                <View style={styles.graphs_container}>
                    <View style={styles.graph_content}>
                        <Text style={styles.graph_title}> Mês </Text>
                        <RoundGraph></RoundGraph>
                    </View>
                    <View style={styles.graph_content}>
                        <Text style={styles.graph_title}> Ano </Text>
                        <LineGraph></LineGraph>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DespesasFixas')}>
                        <Text style={styles.buttonText}>Ver Mais</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Footer/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    saldo_container: {
        backgroundColor: '#29628F',
        padding: 36,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    saldo_text: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 16,
        fontFamily: 'segoe-ui',
    },
    saldo_value: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'segoe-ui',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        fontFamily: 'segoe-ui',
    },
    content_container:{
        backgroundColor: '#f5f5f5'
    },
    saldo_text_container: {
        justifyContent: 'flex-start',
    },
    hidden: {
        justifyContent: 'flex-end',
    },
    finances_container: {
        backgroundColor: '#f5f5f5',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 36,
    },
    graphs_container: {
        flexDirection:'row',
        alignItems: 'center',
    },
    graph_content:{
        flexDirection:'column',
        alignItems: 'center',
        padding: 16,
    },
    graph_title: {
        fontFamily: 'segoe-ui',
        fontSize: 20,
        paddingBottom: 36,
    },
    btnContainer: {
        alignItems: 'flex-end',
        margin: 16,
    },
    button: {
        backgroundColor: '#F36E6A',
        padding: 10,
        borderRadius: 5,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#000',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'segoe-ui',
    },
});

export default Home;
