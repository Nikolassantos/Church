import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Post from '../../Components/Post'

import styles from './styles'

const prayerScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.h1}>Pedidos de Orações</Text>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </SafeAreaView>
  )
}

export default prayerScreen
