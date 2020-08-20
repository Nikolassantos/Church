import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles'

interface InputProps {
  placeholder: string
  InputType?: string
}

const Input: React.FC<InputProps> = ({placeholder, InputType}) => {
  return (
    <TextInput 
    style={styles.Input} 
    placeholderTextColor="#99879D" 
    placeholder={placeholder} 
    />
  )
}

export default Input;