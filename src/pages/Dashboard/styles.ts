import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EDEAFA',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  View:{
    width:'100%', 
    height:'100%',
    flexDirection:'column',
    alignItems:'center'
  },
  Header:{
    width:'90%',
    height:60, 
    flexDirection:'row', 
    alignItems:'center',
    marginTop:30
  },
  Name:{
    marginLeft:10,
    fontSize:20, 
    fontFamily:'Poppins_600SemiBold'
  },
  IMG:{
    width:60, 
    height:60 
  },
  InputMessage:{
    height:'30%'
  },
  TextArea:{
    width:'90%', 
    height:'50%',
    flexDirection:'column',
    justifyContent:'center',
  },
  Frase:{
    fontSize:18, 
    fontFamily:'Poppins_600SemiBold'
  },
  ButtonsView:{
    flexDirection:'row',
    width:'85%',
    justifyContent:'space-between'
  },
  ButtonX:{
    backgroundColor:'#CABDFD',
    width:'20%',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default styles

