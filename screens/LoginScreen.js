import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import Colors from "../constant/Color";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const showDialog = (message) => {
    setDialogMessage(message);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === "user123" && password === "user123") {
        navigation.navigate("Main");
      } else if (!username || !password) {
        showDialog("Please fill in all fields.");
      } else {
        showDialog("Invalid username or password.");
      }
    }, 2000);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={{ color: Colors.white, marginTop: 10, fontFamily: 'Poppins_400Regular' }}>Logging in...</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>
            <Text style={{ color: Colors.white, fontFamily: 'Poppins_600SemiBold' }}>
              Welcome to{" "}
            </Text>
            Todo App
          </Text>
          <Text style={styles.subtitle}>Please login to continue</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={Colors.lightGray}
            value={username}
            onChangeText={setUsername}
            onFocus={() => setUsername("user123")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.lightGray}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setPassword("user123")}
            secureTextEntry
          />
          <Pressable onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>{dialogMessage}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    color: Colors.primary,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.lightGray,
    marginBottom: 20,
    fontFamily: 'Poppins_500Medium',
  },
  input: {
    color: Colors.white,
    backgroundColor: Colors.darkGray,
    height: 48,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default LoginScreen;