import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import { useState } from 'react'

import { styles } from './styles';

export const Home = () => {
    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                <View>
                    <Text style={styles.Values}>$25,400</Text>
                    <Text>Valor Total</Text>
                </View>
                <View>Opção</View>
            </View>
            <View>
                <View>Categorias</View>
                <View>Transações</View>
            </View>
        </View>
    )
}