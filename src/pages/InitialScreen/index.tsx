import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles'

import BackgroundIMG from '../../assets/images/BackgroundIMG.png'

const InitialScreen: React.FC = () => {
  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <View style={styles.Content} >
        <View>
          <Text style={styles.Title} >
           Ministério {`\n`}Profético {`\n`}Leão Ruge
          </Text>
        </View>
        <View style={styles.Footer} >
          <RectButton style={styles.Button} >
            <Text style={styles.TextButton} >
            Entrar na Plataforma
            </Text>
          </RectButton>
         <View style={styles.BackgroundFooterButtons} >
          <Text style={styles.TextFooter} >Ja tem uma conta ? </Text>
            <BorderlessButton>
              <Text style={styles.ButtonFooter} >Log-in</Text>
            </BorderlessButton>
         </View>
        </View>
      </View>
    </ImageBackground>
    )
}

export default InitialScreen;