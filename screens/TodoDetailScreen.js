import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '../constant/Color';

const TodoDetailScreen = ({ route, navigation }) => {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: Colors.background }}>
        <Appbar.BackAction iconColor={Colors.white} onPress={() => navigation.goBack()} />
        <Appbar.Content titleStyle={styles.title} title="Todo Detail" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.status}>
          Status: {todo.completed ? 'Completed' : 'Pending'}
        </Text>
        <Text style={styles.description}>
          {todo.completed ? 'Great job completing this todo!' : 'This todo is still pending.'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Poppins_600SemiBold',
  },
  description: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: Colors.lightGray,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default TodoDetailScreen;