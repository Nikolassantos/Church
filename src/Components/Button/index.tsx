import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styles from './styles'

interface ButtonProps extends RectButtonProperties {
  Title: string
}

const Button: React.FC<ButtonProps> = ({ Title, ...rest  }) => {
  return (
    <RectButton {...rest} style={styles.Button} >
      <Text style={styles.TextButton} >
        {Title}
      </Text>
    </RectButton>
  )
}

export default Button;