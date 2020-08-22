import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styles from './styles'

interface ButtonProps extends RectButtonProperties {
  Title: string,
  width: number,
  height: number
}

const Button: React.FC<ButtonProps> = ({ Title,  height, width, ...rest }) => {
  return (
    <RectButton {...rest} style={[styles.Button, {width:width, height:height}]} >
      <Text style={styles.TextButton} >
        {Title}
      </Text>
    </RectButton>
  )
}

export default Button;