import React from 'react';
import { View, ImageBackground, Text, SafeAreaView  } from 'react-native';
import styles from './styles'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { BorderlessButton } from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  return (
      <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <SafeAreaView style={styles.SafeArea}  >
        <View style={styles.Form} >
          <Text style={styles.TitleForm} >Cadastro</Text>

          <Input placeholder="  Primeiro Nome" />
          <Input placeholder="  Segundo Nome" />
          <Input placeholder="  Email" />
          <Input placeholder="  Senha" />
        </View>
        <View style={styles.BackgroundButton} > 
          <Button Title="Cadastrar" />
        </View>
        <View style={styles.Footer} >
        <Text style={styles.TextFooter} >Ja tem uma conta ? </Text>
          <BorderlessButton>
            <Text style={styles.ButtonFooter} >Log-in</Text>
          </BorderlessButton>
        </View>
        </SafeAreaView>
      
    </ImageBackground>
  )
}

export default SignUp;