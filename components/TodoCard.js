import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import Colors from "../constant/Color";

const TodoCard = ({ todo, onToggleComplete }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Todo Detail", { todo });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Checkbox
            theme={{ colors: { primary: Colors.primary } }}
            status={todo.completed ? "checked" : "unchecked"}
            onPress={() => onToggleComplete(todo.id)}
          />
          <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
            <Text style={styles.todoText}>{todo.title}</Text>
            <Text style={styles.statusText}>
              {todo.completed ? "Completed" : "Pending"}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: "#363636",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Poppins_600SemiBold",
  },
  statusText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: "Poppins_500Medium",
  },
});

export default TodoCard;
