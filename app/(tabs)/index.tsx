import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { use, useState } from "react";
import { Alert, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { colors } = useTheme();

  // State for editing todo
  const [editTingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState<string>("");

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const isLoading = todos == undefined;

  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.error("Error toggling todo:", error);
      Alert.alert("Error", "Failed to toggle todo. Please try again.");
    }
  };

  const handleDeleteTodo = async (id: Id<"todos">) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteTodo({ id });
            } catch (error) {
              console.error("Error deleting todo:", error);
              Alert.alert("Error", "Failed to delete todo. Please try again.");
            }
          },
        },
      ]
    )
  };

  const handleEditTodo = (todo: Todo) => {
    setEditText(todo.title);
    setEditingId(todo._id);
  };

  const handleSaveEdit = async () => {
    if (editTingId) {
      try {
        await updateTodo({ id: editTingId, text: editText.trim() });
        setEditingId(null);
        setEditText("");
      } catch (error) {
        console.error("Error updating todo:", error);
        Alert.alert("Error", "Failed to update todo. Please try again.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editTingId === item._id;

    return (
      <View style={homeStyles.todoItemWrapper}>
        {/* todoItem */}
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Checkbox */}
          <TouchableOpacity
            style={homeStyles.checkbox}
            onPress={() => handleToggleTodo(item._id)}>
            <LinearGradient
              colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}

              style={[
                homeStyles.checkboxInner,
                { borderColor: item.isCompleted ? "transparent" : colors.border },
              ]}
            >
              {item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
            </LinearGradient>
          </TouchableOpacity>

          {/* Todo Container and Actions */}
          {/* Editing State */}
          {isEditing ? (
            <View style={homeStyles.editContainer}>
              {/* TextInput */}
              <TextInput
                style={homeStyles.editInput}
                value={editText}
                onChangeText={setEditText}
                autoFocus
                multiline
                placeholder="Edit your todo..."
                placeholderTextColor={colors.textMuted}
              />
              {/* Save and Cancel Buttons */}
              <View style={homeStyles.editButtons}>
                <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.success} style={homeStyles.editButton}>
                    <Ionicons name="checkmark" size={18} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.muted} style={homeStyles.editButton}>
                    <Ionicons name="close" size={18} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // UnEditing State
            < View style = {homeStyles.todoTextContainer}>
          {/* Title */}
          <Text
            style={[
              homeStyles.todoText,
              item.isCompleted && {
                textDecorationLine: "line-through",
                color: colors.textMuted,
                opacity: 0.6,
              },
            ]}
          >
            {item.title}
          </Text>

          {/* Mutation Buttons */}
          <View style={homeStyles.todoActions}>
            {/* Edit Button */}
            <TouchableOpacity onPress={() => handleEditTodo(item)} activeOpacity={0.8}>
              <LinearGradient colors={colors.gradients.warning} style={homeStyles.actionButton}>
                <Ionicons name="pencil" size={20} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity onPress={() => handleDeleteTodo(item._id)} activeOpacity={0.8}>
              <LinearGradient colors={colors.gradients.danger} style={homeStyles.actionButton}>
                <Ionicons name="trash" size={20} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

      </View>)
  }

        </LinearGradient >
      </View >
    )
}

return (
  <LinearGradient colors={useTheme().colors.gradients.background} style={homeStyles.container}>
    <StatusBar barStyle={useTheme().colors.statusBarStyle} />
    <SafeAreaView style={homeStyles.container}>
      <Header />

      <TodoInput />

      {/* Using Flatlist */}
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item._id}
        style={homeStyles.todoList}
        contentContainerStyle={homeStyles.todoListContent}
        ListEmptyComponent={<EmptyState />}
      // accessibilityShowsLargeContentViewer={false}
      />

    </SafeAreaView>
  </LinearGradient>
);
}