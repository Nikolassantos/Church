import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#EDEAFA',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  Title:{
    fontSize:32,
    fontFamily:'Poppins_700Bold',
    flexDirection:'column',
    textAlign:'center'
  },
  Content:{
    width:'100%',
    height:'100%',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
  },
  TextView:{
    marginTop:100
  },
  Button:{
    backgroundColor:'#9378FF',
    width:250,
    height:60,
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  TextButton:{
    fontFamily:'Poppins_400Regular',
    color:'#FFFF'
  },
  TextFooter:{
    fontFamily:'Poppins_400Regular',
  },
  ButtonFooter:{  
    fontWeight:'bold'
  },
  Footer:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
    marginBottom:20
  },
  BackgroundFooterButtons:{
    marginTop:10,
    flexDirection:'row',
  }
})

export default styles