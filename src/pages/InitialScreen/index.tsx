import React from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import Button from '../../Components/Button';

import styles from './styles'


const InitialScreen: React.FC = () => {
  const { navigate } = useNavigation();

  function NavigateLogin() {
    navigate('Login')
  }

  return (
    <ImageBackground 
      source={BackgroundIMG}
      style={styles.container} 
    >
      <SafeAreaView  >
      <View style={styles.Content} >
        <View style={styles.TextView} >
          <Text style={styles.Title} >
           Ministério {`\n`}
           Profético {`\n`}
           Leão Ruge
          </Text>
        </View>
        <View style={styles.Footer} >
          <Button  
            onPress={NavigateLogin} Title="Acessar a Plataforma"
            width={300}
            height={65}
          />
         <View style={styles.BackgroundFooterButtons} >
         </View>
        </View>
      </View>
      </SafeAreaView>
    </ImageBackground>
    )
}

export default InitialScreen;