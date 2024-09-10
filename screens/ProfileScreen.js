import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import Colors from "../constant/Color";

const ProfileScreen = () => {
  const portfolio = [
    {
      id: "1",
      title: "HRMS (Human Resource Management System)",
      description:
        "A comprehensive HR system for managing employees, built with React and Next.js.",
    },
    {
      id: "2",
      title: "Travel Website",
      description:
        "A travel website with advanced booking features, developed using Laravel and React.",
    },
    {
      id: "3",
      title: "UI Library",
      description:
        "A customizable UI component library designed for web applications.",
    },
    {
      id: "4",
      title: "University Data Recognition Website",
      description:
        "A website for university data recognition using machine learning, built with React and Laravel.",
    },
  ];

  const renderPortfolioItem = ({ item }) => (
    <View style={styles.portfolioItem}>
      <Text style={styles.portfolioTitle}>{item.title}</Text>
      <Text style={styles.portfolioDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "../assets/widi.png" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Widi Diky Kurniawan</Text>
        <Text style={styles.bio}>
          I am an experienced Frontend and Mobile Developer, expert in React,
          Next.js, Laravel, and Flutter. With more than 3 years of experience in
          web and mobile application development.
        </Text>
      </View>
      <Text style={styles.sectionTitle}>Portfolio</Text>
      <FlatList
        data={portfolio}
        renderItem={renderPortfolioItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 12,
    color: Colors.lightGray,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.white,
    marginBottom: 15,
  },
  portfolioItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: Colors.darkGray,
    borderRadius: 8,
  },
  portfolioTitle: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: Colors.white,
  },
  portfolioDescription: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: Colors.lightGray,
    marginTop: 5,
  },
});

export default ProfileScreen;