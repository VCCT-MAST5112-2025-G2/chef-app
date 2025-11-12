import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles";
import { MenuItem } from "../../App";
import React, { useState } from 'react';

type HubScreenProps = {
  chefName: string;
  setChefName: React.Dispatch<React.SetStateAction<string>>;
  photoText: string;
  setPhotoText: React.Dispatch<React.SetStateAction<string>>;
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export default function HubScreen({
  chefName,
  setChefName,
  photoText,
  setPhotoText,
  menu,
  setMenu,
}: HubScreenProps) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  function addItem() {
    if (!name || !desc || !price) {
      Alert.alert("Please fill in all fields!");
      return;
    }

    const newItem: MenuItem = {
      id: Math.random().toString(),
      name,
      desc,
      course,
      price: parseFloat(price),
    };

    setMenu([...menu, newItem]);
    setName("");
    setDesc("");
    setCourse("Starters");
    setPrice("");
  }

  return (
    <View>
      <Text style={styles.sectionTitle}>Hub</Text>
      <Text style={styles.centerText}>
        Your personal chef hub to manage dishes and recipes.
      </Text>

      {/* Profile */}
      <View style={styles.profileSection}>
        <View style={styles.profilePhoto}>
          <Text style={{ fontSize: 40 }}>{photoText}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Chef Name:</Text>
          <TextInput
            style={styles.input}
            value={chefName}
            onChangeText={setChefName}
          />

          <Text style={styles.label}>Emoji / Initials:</Text>
          <TextInput
            style={styles.input}
            value={photoText}
            onChangeText={setPhotoText}
          />
        </View>
      </View>

      {/* Add Dish */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Dish Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={desc}
          onChangeText={setDesc}
          multiline
        />

        <Text style={styles.label}>Course:</Text>
        <TextInput style={styles.input} value={course} onChangeText={setCourse} />

        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addBtn} onPress={addItem}>
          <Text style={styles.addBtnText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
