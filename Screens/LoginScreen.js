import { useState } from "react";

import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 100 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Войти</Text>
        </View>

        <View>
          <Text style={styles.inputTitle}>Email address</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            secureTextEntry={true}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={keyboardHide}
        >
          <Text style={styles.btnTitle}>Sing In</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.navigate}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    backgroundColor: "#f6f6f6",
  },
  inputTitle: {
    color: "#212121",
    marginBottom: 16,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#ff6C00",
    height: 50,
    borderRadius: 30,
    marginTop: 43,
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 18,
  },
  navigate: {
    color: "#1B4371",
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
  },
});
