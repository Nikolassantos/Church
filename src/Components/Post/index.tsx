import React from 'react';
import { Image,Text,View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IPost } from './types'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PerfilIMG from '../../assets/images/user.png'
import styles from './styles'
const Post: React.FC<IPost> = () => {
  return(
    <View style={{flexDirection:'row'}} >
      <View>
        <TouchableOpacity style={styles.Container} >
          <Image source={PerfilIMG}  style={styles.IMG}/>
        <View>
            <Text>Lucas dos Santos</Text>
            <Text>asdfasdfdasfasdflmadps</Text>
        </View>
      </TouchableOpacity>
      </View>
        <TouchableOpacity style={{ backgroundColor:'blue' }}  >
        <Feather  name="heart" size={30} />
      </TouchableOpacity>
   </View>
  )
}

export default Post;