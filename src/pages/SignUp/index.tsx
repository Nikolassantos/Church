import React from 'react';
import { View,
  ImageBackground, 
  Text, 
  TouchableOpacity ,
  Image ,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import PerfilIMG from '../../assets/images/user.png'
import { BorderlessButton } from 'react-native-gesture-handler';
import Header from '../../Components/Header';

const SignUp: React.FC = () => {
  return (
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
            <TouchableOpacity>  
              <Image  source={PerfilIMG} style={{ width:100, height:100 }} />
            </TouchableOpacity>
          <Input 
            placeholder="Primeiro Nome" 
            height={60}
            width="90%"
          />
          <Input 
            placeholder="Segundo Nome" 
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
          <Button Title="Cadastrar" />
        </View>
        <View style={styles.Footer} >
        <Text style={styles.TextFooter} >Ja tem uma conta ? </Text>
          <BorderlessButton>
            <Text style={styles.ButtonFooter} >Log-in</Text>
          </BorderlessButton>
        </View>
        </KeyboardAvoidingView>
      
    </ImageBackground>
  )
}

export default SignUp;