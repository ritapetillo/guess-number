import React, { ReactComponentElement } from "react";
import { RCTNativeAppEventEmitter, StyleSheet, Text, View } from "react-native";

interface Props {
  children: JSX.Element;
  style?: any;
}
const Card: React.FC<Props> = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "rgb(0,0,0)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 15,
  },
});
