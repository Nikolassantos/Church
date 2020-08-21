import React from 'react';
import { TextInput, TextInputAndroidProps } from 'react-native';

import styles from './styles'

interface InputProps extends TextInputAndroidProps {
  placeholder: string
}

const Input: React.FC<InputProps> = ({placeholder, ...rest }) => {
  return (
    <TextInput 
      {...rest}
      style={styles.Input} 
      placeholderTextColor="#99879D" 
      placeholder={placeholder} 
    />
  )
}

export default Input;