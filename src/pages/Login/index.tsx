import React from 'react';
import { View, ImageBackground, SafeAreaView,Text } from 'react-native';

import Button from '../../Components/Button'

import BackgroundIMG from '../../assets/images/BackgroundIMG.png'


import styles from './styles'
import Input from '../../Components/Input';
import { BorderlessButton } from 'react-native-gesture-handler';

const Login: React.FC = () => {
  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <SafeAreaView style={styles.SafeArea}  >
        <View style={styles.Form} >
          <Text style={styles.TitleForm} >Login</Text>

          <Input placeholder="  Login" />
          <Input placeholder="  Senha"  />
        </View>
        <View style={styles.BackgroundButton} > 
          <Button Title="Login" />
        </View>
        <View style={styles.Footer} >
        <Text style={styles.TextFooter} >não tem uma conta ? </Text>
          <BorderlessButton>
            <Text style={styles.ButtonFooter} >Cadastro</Text>
          </BorderlessButton>
        </View>
        </SafeAreaView>
      
    </ImageBackground>
  )
}

export default Login;