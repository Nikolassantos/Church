import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  Container: {
    marginTop: Constants.statusBarHeight + 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20
  }
})
export default styles
