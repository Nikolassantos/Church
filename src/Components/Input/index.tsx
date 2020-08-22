import React from 'react';
import { TextInput, TextInputAndroidProperties } from 'react-native';


interface InputProps extends TextInputAndroidProperties {
  placeholder: string,
  height: number,
  width: string,
}

const Input: React.FC<InputProps> = ({placeholder,  height,width, ...rest }) => {
  return (
    <TextInput 
      {...rest}
      style={{
        backgroundColor:'#FBEEFF',
        height:height,
        width:width,
        borderRadius:10,
        fontFamily:'Poppins_400Regular',
        marginTop:20,
        padding:10,
        color:'#99879D'
      }} 
      placeholderTextColor="#99879D" 
      placeholder={placeholder} 
    />
  )
}

export default Input;