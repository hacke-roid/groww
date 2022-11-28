import React from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require("../../assets/growwLogo(1).png")}
        style={styles.iconStyle}
      />
      
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    borderWidth: 1,
    borderColor: "coral",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: "row",
  },
  iconStyle: {
    height: 48,
  },
  inputStyle: {
    marginHorizontal: 10,
    fontSize: 18,
    placeholder: 'Search',
    flex: 1,
  }
});

export default SearchBar;
