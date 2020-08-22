import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
  Icon: string,
  size: number,
  marginTopIcon: number
}

const Header: React.FC<HeaderProps> = ({ Icon, size, marginTopIcon }) => {
  const navigation = useNavigation();

  function Goback() {
    navigation.goBack()
  }

  return (
    <View style={{
      marginTop: Constants.statusBarHeight + marginTopIcon, 
      width:'90%',
    }} >
      <TouchableOpacity onPress={Goback} >      
        <Feather name={Icon} size={size} />
      </TouchableOpacity>
    </View>
  )
}

export default Header;