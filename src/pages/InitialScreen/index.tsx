import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Button from '../../Components/Button';

import styles from './styles'


const InitialScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function NavigateToSignUp() {
    navigate('Cadastro')
  }
  function NavigateLogin() {
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
          <Button  onPress={NavigateLogin} Title="Acessar a Plataforma" />
         <View style={styles.BackgroundFooterButtons} >
          <Text style={styles.TextFooter} >Não tem conta ? </Text>
            <TouchableOpacity onPress={NavigateToSignUp} >
              <Text style={styles.ButtonFooter} >Cadatrar</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    </ImageBackground>
    )
}

export default InitialScreen;