import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { meses, despesasFixas ,despesasUsuais } from '../../core/dataFake';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeSwiper from '../../components/homeSwiper';
import { FIREBASE_AUTH } from '../../firebaseConfig';

interface HomeProps {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
    return (
        <ScrollView style={styles.container}>

            <Header/>

            <View style={styles.saldo_container}>
                <View style={styles.saldo_text_container}>
                    <Text style={styles.saldo_text}>Saldo</Text>
                    <Text style={styles.saldo_value}>R$ XXX.XX</Text>
                </View>
                <View style={styles.hidden}>
                    <Image style={styles.img} source={require('../../assets/png/hideValue.png')} />
                </View>
            </View>

             <View style={styles.content_container}>
                <HomeSwiper items={meses} title="Balanço Mensal" navigation={navigation} />
            </View>
            <HomeSwiper items={despesasFixas} title="Despesas Fixas" navigation={navigation} />
            <View style={styles.content_container}>
                <HomeSwiper items={despesasUsuais} title="Despesas Usuais" navigation={navigation} />
            </View>
            <HomeSwiper items={meses} title="Receitas" navigation={navigation} />

            <View style={styles.finances_container}>

                    <Text style={styles.title}> Finanças para Você </Text>
                <View style={styles.graphs_container}>
                    <View style={styles.graph_content}>
                        <Text style={styles.graph_title}> Mês </Text>
                       {/* <RoundGraph></RoundGraph> */}
                       <Image style={styles.img_graph} source={require('../../assets/png/round-graph.png')} />
                    </View>
                    <View style={styles.graph_content}>
                        <Text style={styles.graph_title}> Ano </Text>
                      {/* <LineGraph></LineGraph> */}
                      <Image style={styles.img_graph} source={require('../../assets/png/line-graph.png')} />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
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
    img: {
        width: 24,
        height: 24
    },
    img_graph: {
        width: 128,
        height: 128,
    },
});

export default Home;
