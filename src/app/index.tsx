import { Stack, useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Saldo Total</Text>
        <Text>4.3000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
