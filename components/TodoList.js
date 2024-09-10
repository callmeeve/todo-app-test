import React, { useState } from 'react';
import { FlatList } from 'react-native';
import TodoCard from './TodoCard';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleToggleComplete = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <FlatList
      style={{ padding: 10 }}
      data={todoList}
      renderItem={({ item }) => (
        <TodoCard todo={item} onToggleComplete={handleToggleComplete} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodoList;