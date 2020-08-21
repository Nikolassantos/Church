import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Button from '../../Components/Button';

import styles from './styles'


const InitialScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function NavigateToSignUp() {
    navigate('Login')
  }

  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <View style={styles.Content} >
        <View>
          <Text style={styles.Title} >
           Ministério {`\n`}
           Profético {`\n`}
           Leão Ruge
          </Text>
        </View>
        <View style={styles.Footer} >
          <Button  onPress={NavigateToSignUp} Title="Acessar a Plataforma" />
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