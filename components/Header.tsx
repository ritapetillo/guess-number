import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

interface Props {
  title: string;
}
const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 36,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default Header;
