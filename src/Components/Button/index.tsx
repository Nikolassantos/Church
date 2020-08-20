import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles'

interface ButtonProps {
  Title: string
}

const Button: React.FC<ButtonProps> = ({ Title }) => {
  return (
    <RectButton style={styles.Button} >
      <Text style={styles.TextButton} >
        {Title}
      </Text>
    </RectButton>
  )
}

export default Button;