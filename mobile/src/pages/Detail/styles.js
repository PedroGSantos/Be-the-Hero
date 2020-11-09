import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 24,
        
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detalhes:{
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    contatos:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    

    detalhesValor: {
       
        fontSize: 15,
        
        color: '#737380',
    },

    detalhesPropriedade: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    textFooter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30,
    },

    detalhesFooter: {
        marginTop: 16,
        fontSize: 15,
        color: '#737380',
    },

    button: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color:'#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
    
});