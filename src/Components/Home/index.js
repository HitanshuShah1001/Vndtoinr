import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";
import { styles } from "./styles";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [answer, setAnswer] = useState("");

  const changeToInr = () => {
    if (isNaN(amount * 0.0035)) {
      return alert("Please enter a number only");
    }
    setAnswer(`${parseInt(amount * 0.0035)} Rupees`);
  };

  const changeToUsd = () => {
    if (isNaN(amount * 0.0035)) {
      return alert("Please enter a number only");
    }
    setAnswer(`${parseInt(amount * 0.000043)} Dollars`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={amount}
        onChangeText={(val) => setAmount(val)}
        placeholderTextColor={"white"}
        style={styles.input}
        placeholder="Enter amount"
      />
      <View style={styles.buttonContainer}>
        <Button title="INR" onPress={changeToInr} />
        <Button title="USD" onPress={changeToUsd} />
      </View>
      {<Text style={styles.text}>{answer}</Text>}
    </SafeAreaView>
  );
}
