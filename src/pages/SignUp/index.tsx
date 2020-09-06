import React from 'react';
import { View,
  ImageBackground, 
  Text, 
  TouchableOpacity,
  Image ,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import PerfilIMG from '../../assets/images/user.png'
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';
import ImgAlert from '../../utils/alert';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  function GotoLogin() {
    navigate('Login')
  }
  return (
    <>
      <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <Header 
        Icon="arrow-left"
        size={30}
        marginTopIcon={15}
      />
      <KeyboardAvoidingView 
        style={styles.SafeArea} 
        // behavior={ Platform.OS === 'ios' ? 'padding': null }
      >
        <View style={styles.Form} >

          <Text style={styles.TitleForm} >Cadastro</Text>
            <TouchableOpacity onPress={ImgAlert} >  
              <Image source={PerfilIMG} style={{ width:100, height:100 }} />
            </TouchableOpacity>
          <Input 
            placeholder="Nome" 
            height={60}
            width="90%"
          />
          <Input 
            placeholder="username" 
            height={60}
            width="90%"
          />
          <Input 
            placeholder="Email"
            height={60}
            width="90%"
          />
          <Input 
            placeholder="Senha" 
            height={60}
            width="90%"
          />
        </View>
        <View style={styles.BackgroundButton} > 
          <Button 
            Title="Cadastrar" 
            width={300}
            height={65}
          />
        </View>
        <View style={styles.Footer} >
        <Text style={styles.TextFooter} >Ja tem uma conta ? </Text>
          <TouchableOpacity onPress={GotoLogin} >
            <Text style={styles.ButtonFooter} >Log-in</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      
    </ImageBackground>
    </>
  )
}

export default SignUp;