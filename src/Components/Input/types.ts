import { TextInputAndroidProperties } from 'react-native'

export interface InputProps extends TextInputAndroidProperties {
  placeholder?: string,
  height: number,
  width: string,
  multiline?: boolean,
}