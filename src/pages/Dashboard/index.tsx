import React from 'react';
import { View, ImageBackground } from 'react-native';
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'

import styles from './styles'

const Dashboard: React.FC = () => {
  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <View>
        
      </View>
    </ImageBackground>
  )
}

export default Dashboard;