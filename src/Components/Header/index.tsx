import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

interface HeaderProps {
  Icon: string,
  size: number
}

const Header: React.FC<HeaderProps> = ({ Icon, size }) => {
  return (
    <View style={styles.header} >
      <Feather Name={String(Icon)} size={Number(size)} />
    </View>
  )
}

export default Header;