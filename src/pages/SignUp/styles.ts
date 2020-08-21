import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  SafeArea:{
    width:'100%',
    height:'100%',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  TitleForm:{
    fontSize:24,
    fontFamily:'Poppins_600SemiBold',
    marginBottom:10
  },
  Form:{
    backgroundColor:'#FFFF',
    width:'90%',
    height:'65%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  },
  BackgroundButton:{
    marginTop:30
  },
  ButtonFooter:{  
    fontWeight:'bold'
  },
  TextFooter:{
    fontFamily:'Poppins_400Regular',
  },
  Footer:{
    flexDirection:'row',
    marginTop:10
  }
})

export default styles