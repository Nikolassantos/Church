import React from 'react'
import { Image, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { IPost } from './types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PerfilIMG from '../../assets/images/user.png'
import styles from './styles'
const Post: React.FC<IPost> = () => {
  return (
    <View style={styles.Post}>
      <TouchableOpacity style={styles.PostButton}>
        <TouchableOpacity>
          <Image source={PerfilIMG} style={styles.IMG} />
        </TouchableOpacity>
        <View style={styles.Text}>
          <Text>Nikolas dos Santos</Text>
          <Text>Nikolas dos Santosasdasdasda</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="heart" style={styles.Icon} />
      </TouchableOpacity>
    </View>
  )
}

export default Post
