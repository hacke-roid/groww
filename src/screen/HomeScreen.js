import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ExploreSreen from "./ExploreSreen";
import SearchBar from "./SearchBar";

const HomeScreen = () => {
  const [justifyContent, setJustifyContent] = useState("Explore");

  return (
    <PreviewLayout
      selectedValue={justifyContent}
      values={["Explore", "Dashboard"]}
      setSelectedValue={setJustifyContent}
    >
    <Text style={styles.labels}>Market Indices</Text>
    <View style={styles.row}>
      <TouchableOpacity 
      style={[styles.box, { backgroundColor: "oldlace" }]} >
        <Text>Index</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, { backgroundColor: "oldlace" }]} >
        <Text>Sensex</Text>
      </TouchableOpacity>
      </View>
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <SearchBar />
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 40,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginTop: 10,
    marginHorizontal: "1%",
    alignItems: "center",
    minWidth: "48%",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  labels: {
    fontSize: 22,
    textAlign: 'justify',
    fontWeight: "400",
    paddingLeft: 10,
    paddingVertical: 10,
    color: "purple",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  box: {
    height: 100,
    width:100,
    marginTop: 10,
    minWidth: '48%',
    marginHorizontal: "1%",
    
  }
});

export default HomeScreen;
