import React from "react";
import { StyleSheet, TextInput} from "react-native";

interface Props {
  styles?: {};
  keyboardType: any;
  onChangeText: (text:string) => void;
  value?: string | undefined;

}

const Input: React.FC<Props> = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.styles }}  />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
