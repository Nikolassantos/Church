import React from 'react';
import { TextInput,  } from 'react-native';
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({placeholder, multiline, height,width, ...rest }) => {
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
      multiline={multiline}
    />
  )
}

export default Input;