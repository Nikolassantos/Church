import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import PerfilIMG from '../../assets/images/user.png'
import Header from '../../Components/Header'
import styles from './styles'
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Dashboard: React.FC = () => {
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
    <View style={styles.View} >
      <View style={styles.Header} >
        <Image  source={PerfilIMG} style={styles.IMG} />
        <Text style={styles.Name} >Nikolas dos Santos</Text>
        </View>
        <View style={styles.TextArea} >
          <Text style={styles.Frase} >Faça seu Pedido de Oração</Text>
          <Input 
            width="100%"
            height={200}
            placeholder="message"
          />
        </View>
        <Button Title="Enviar" />
      </View>
    </ImageBackground>
  )
}

export default Dashboard;