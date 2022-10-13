import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Camera, CameraType } from 'expo-camera';

import { styles }from './styles'
import { auth } from '../../firebase/index';

export const SingIn = ({navigation}:any) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')

    async function singIn() {
        await createUserWithEmailAndPassword(auth, email, password)
    .then(e => {
        alert('cadastrado com sucesso')
        navigation.navigate('Home')
    })
    }
    return(
       <View>
            <View style={styles.ImageConatiner}>
                <Image
                    style={styles.Image}
                    source={require('../../assets/Login.png')}
                />
            </View>
            <View style={styles.FormConatiner}>
                <View>
                    <Text style={styles.Tilte}>Sing-in</Text>
                </View>
                <View style={styles.Form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.Input}
                        value={name}
                        onChangeText={setName}
                        placeholder='Your name'
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.Input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Your email'
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
                    <TouchableOpacity
                        onPress={() => singIn()}
                        style={styles.Button}
                    >
                        <Text style={styles.TextButton}>SingIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
    )
}