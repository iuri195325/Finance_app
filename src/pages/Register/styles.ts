import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100vw',
      height: '100vh',
    },


    ImageConatiner: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
    },
    FormConatiner: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '60%%',
    },
    Image: {
        width:'100%',
        height:'100%',
    },


    Tilte: {
        fontWeight:'bold',
        fontSize:28,
        marginLeft:20,
        marginBottom:30
    },
    Form: {
        marginLeft:50,
    },
    label: {
        fontSize:22, 
        marginBottom:4,
        fontWeight: '500',
        color:'#363636'
    },
    Input: {
        marginBottom:15,
        height:50,
        width:'90%',
        paddingLeft:2,
        borderBottomWidth: 1,

    },
    Button: {
        backgroundColor:'#223942',
        padding:20,
        width:'90%',
        textAlign: 'center',
        borderRadius:50,
        marginTop:20
    },
    TextButton: {
        color:'#fff',
        fontSize:18,
        fontWeight:'800',
    },
    cadastro: {
        color:'#A9A9A9',
        marginLeft:'76%',
        fontSize:16,

    }
});