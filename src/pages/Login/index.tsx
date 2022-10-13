import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'

import { styles }from './styles'
import { auth } from '../../firebase/index';

export const Login = ({navigation}:any) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    async function login(){
        await signInWithEmailAndPassword(auth, email, password)
        .then(e => navigation.navigate('Home'))
        .catch(e => {alert('erro ao tentar cadastrar novo usuario')})
    }

    function singIn(){
        navigation.navigate('SingIn')
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.ImageConatiner}>
                <Image
                    style={styles.Image}
                    source={require('../../assets/Login.png')}
                />
            </View>
            <View style={styles.FormConatiner}>
                <View>
                    <Text style={styles.Tilte}>Log-in</Text>
                </View>
                <View style={styles.Form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.Input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Your email id'
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.Input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text onPress={() => singIn()} style={styles.cadastro}>Sing-up</Text>
                    <TouchableOpacity
                        onPress={() => login()}
                        style={styles.Button}
                    >
                        <Text style={styles.TextButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}