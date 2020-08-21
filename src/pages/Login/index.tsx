import React from 'react';
import { View, ImageBackground, SafeAreaView,Text } from 'react-native';
import Header from '../../Components/Header'
import Button from '../../Components/Button'
import { BorderlessButton } from 'react-native-gesture-handler';
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Input from '../../Components/Input';

import styles from './styles'

const Login: React.FC = () => {
  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <Header/>
      <SafeAreaView style={styles.SafeArea}  >
        <View style={styles.Form} >
          <Text style={styles.TitleForm} >Login</Text>

          <Input placeholder="  Login" autoCompleteType="username" />
          <Input placeholder="  Senha" autoCompleteType="password" />
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