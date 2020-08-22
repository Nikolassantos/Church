import React from 'react';
import { 
  View, 
  ImageBackground, 
  SafeAreaView,
  Text, 
  TouchableOpacity,
} from 'react-native';
import Header from '../../Components/Header'
import Button from '../../Components/Button'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Input from '../../Components/Input';
import { useNavigation } from '@react-navigation/native';


import styles from './styles'

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  function GoSignup() {
    navigate('Cadastro')
  }
  function GoDashboard() {
    navigate('Dashboard')
  }

  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <Header 
        Icon="arrow-left"
        size={30}
        marginTopIcon={100}
      />
      <SafeAreaView style={styles.SafeArea}  >
        <View style={styles.Form} >
          <Text style={styles.TitleForm} >Login</Text>

          <Input 
            placeholder="Login" 
            autoCompleteType="username" 
            height={60}
            width="90%"
          />
          <Input 
            placeholder="Senha" 
            autoCompleteType="password" 
            height={60}
            width="90%"
          />
        </View>
        <View style={styles.BackgroundButton} > 
          <Button 
            Title="Login"
            onPress={GoDashboard} 
            width={300}
            height={65}
           />
        </View>
        <View style={styles.Footer} >
        <Text style={styles.TextFooter} >não tem uma conta ? </Text>
          <TouchableOpacity onPress={GoSignup} >
            <Text style={styles.ButtonFooter} >Cadastro</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      
    </ImageBackground>
  )
}

export default Login;