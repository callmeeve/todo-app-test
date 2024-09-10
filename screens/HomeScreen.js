import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button, FlatList } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import TodoList from "../components/TodoList";
import Colors from "../constant/Color";

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        <Button title="Retry" onPress={fetchTodos} color={Colors.primary} />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Appbar.Header style={{ backgroundColor: Colors.background }}>
            <Appbar.Content titleStyle={styles.title} title="Todo App" />
          </Appbar.Header>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Todos..."
              placeholderTextColor={Colors.lightGray}
              onChangeText={updateSearch}
              value={search}
              mode="outlined"
              theme={{ colors: { primary: Colors.primary, text: Colors.white, placeholder: Colors.lightGray } }}
            />
          </View>
        </>
      }
      data={filteredTodos.slice(0, 10)}
      renderItem={({ item }) => <TodoList todos={[item]} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.primary,
    fontFamily: "Poppins_400Regular",
  },
  errorText: {
    marginBottom: 10,
    fontSize: 16,
    color: Colors.error,
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  searchContainer: {
    padding: 10,
    backgroundColor: Colors.background,
  },
  searchInput: {
    backgroundColor: Colors.darkGray,
    borderRadius: 10,
    fontSize: 14,
    color: Colors.white,
  },
});

export default HomeScreen;