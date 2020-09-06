import React, { useState } from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import BackgroundIMG from '../../assets/images/BackgroundIMG.png'
import PerfilIMG from '../../assets/images/user.png'
import Header from '../../Components/Header'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation()

  function handleprayerScreen() {
    navigate('prayerScreen')
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
               multiline={true}
               placeholder="Pedido de oração"
               numberOfLines={5}
              //  onChange={(event: VoidFunction) setInputValue(event.target.value)}
          />
        </View>
        <View style={styles.ButtonsView} >
          <RectButton  style={styles.ButtonX} >
          <Feather name="x" size={20} color="#FFF" />
          </RectButton>
        <Button 
          Title="Enviar" 
          width={250}
          height={65}
          onPress={handleprayerScreen}
          />
        </View>
      </View>
    </ImageBackground>
    </>
  )
}

export default Dashboard;