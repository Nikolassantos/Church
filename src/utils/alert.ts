import { Alert } from "react-native";

export default function ImgAlert(){
Alert.alert(
  "Alerta",
  "ainda não temos a opção de envio de foto",
  [

    { text: "OK"}
  ],
  { cancelable: false }
);
}


