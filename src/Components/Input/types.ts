import { TextInputAndroidProperties, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native'

export interface InputProps extends TextInputAndroidProperties {
  placeholder?: string,
  height?: number,
  width?: string,
  multiline?: boolean,
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}