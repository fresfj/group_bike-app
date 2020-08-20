import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    justifyContent:'center',
    padding: 25,
    alignItems: 'center'
  },
  logoImg:{
    width: '60%',
    resizeMode: 'contain',
  },

  title:{
    fontFamily: 'Archivo_700Bold',
    color: '#ff9100',
    fontSize: 32,
    lineHeight: 38,
    marginBottom:30,
  },
  
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#ff9100',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonPrimary:{
    margin:30,
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#000',
    fontSize:28
  },

  buttonTextPrimary:{
    
    color: '#fff',
  },

  buttonTextSecondary:{
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: 'red',
  },

  textMiddle:{
    color: '#000',
    fontSize: 12,
    marginTop:30,
    marginBottom: 30
  },

  textMiddleBold: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color:'#ff9100'
  }

})

export default style