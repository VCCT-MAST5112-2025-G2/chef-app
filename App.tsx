import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from 'react';

type MenuItem = {
  id: string;
  name: string;
  desc: string;
  course: string;
  price: string;
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

  const [chefName, setChefName] = useState("Chef Anonymous");
  const [photoText, setPhotoText] = useState("🙂");

  function addItem() {
    if (!name || !desc || !price) {
      Alert.alert("Please fill in all fields!");
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      name,
      desc,
      course,
      price,
    };

    setMenu([...menu, newItem]);
    setName("");
    setDesc("");
    setPrice("");
    setCourse("Starters");
    setPage("home");
  }

  function removeItem(id: string) {
    setMenu(menu.filter((m: MenuItem) => m.id !== id));
  }

  const filteredMenu = menu.filter((m: MenuItem) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>
        menu
        maniac
      </Text>

      <View style={styles.navButtons}>
        <TouchableOpacity onPress={() => setPage("home")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPage("recipes")}
          style={styles.navBtn}
        >
          <Text style={styles.navBtnText}>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("chefs")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Chefs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("hub")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Hub</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#333"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView style={{ flex: 1 }}>
        {page === "home" && (
          <View>
            <Text style={styles.welcome}>Welcome, {chefName}!</Text>

            {filteredMenu.length > 0 ? (
              filteredMenu.map((item: MenuItem) => (
                <View key={item.id} style={styles.menuCard}>
                  <Text style={styles.menuTitle}>{item.name}</Text>
                  <Text style={styles.menuText}>{item.desc}</Text>
                  <Text style={styles.menuText}>Course: {item.course}</Text>
                  <Text style={styles.menuText}>Price: ${item.price}</Text>

                  <TouchableOpacity
                    onPress={() => removeItem(item.id)}
                    style={styles.removeBtn}
                  >
                    <Text style={styles.removeBtnText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={styles.centerText}>No dishes yet. Add some!</Text>
            )}

            <TouchableOpacity style={styles.nextPageBtn}>
              <Text style={styles.nextPageText}>NEXT PAGE</Text>
            </TouchableOpacity>
          </View>
        )}

        {page === "recipes" && (
          <View>
            <Text style={styles.sectionTitle}>Recipes</Text>
            <Text style={styles.centerText}>
              View and explore different menu items created by the chef.
            </Text>
          </View>
        )}

        {page === "chefs" && (
          <View>
            <Text style={styles.sectionTitle}>Chefs</Text>
            <Text style={styles.centerText}>
              Meet the talented chefs behind the dishes!
            </Text>
          </View>
        )}

        {page === "hub" && (
          <View>
            <Text style={styles.sectionTitle}>Hub</Text>
            <Text style={styles.centerText}>
              Your personal chef hub to manage dishes and recipes.
            </Text>

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

            <View style={styles.formContainer}>
              <Text style={styles.label}>Dish Name:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.label}>Description:</Text>
              <TextInput
                style={[styles.input, { height: 60 }]} 
                value={desc}
                onChangeText={setDesc}
                multiline
              />

              <Text style={styles.label}>Course:</Text>
              <TextInput
                style={styles.input}
                value={course}
                onChangeText={setCourse}
                placeholder="Starters, Mains, Dessert..."
              />

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
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: "#8b63c3", padding: 20 },
  title: { fontSize: 30, color: "white", fontWeight: "bold", marginBottom: 15 },
  navButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  navBtn: {
    backgroundColor: "#d3248b",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 4,
  },
  navBtnText: { color: "black", fontWeight: "bold" },
  searchInput: {
    backgroundColor: "#d572b4",
    borderRadius: 20,
    padding: 8,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuCard: {
    backgroundColor: "#3c225f",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  menuTitle: { color: "#ff7fe0", fontSize: 18, fontWeight: "bold" },
  menuText: { color: "#ffd6f3", fontSize: 14, marginVertical: 2 },
  removeBtn: {
    backgroundColor: "#ff5fb3",
    padding: 6,
    borderRadius: 10,
    marginTop: 6,
    alignSelf: "center",
  },
  removeBtnText: { color: "black", fontWeight: "bold" },
  sectionTitle: {
    textAlign: "center",
    fontSize: 22,
    color: "#3b005a",
    fontWeight: "bold",
    marginTop: 10,
  },
  centerText: { textAlign: "center", color: "black", marginVertical: 10 },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2b8e2",
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3c225f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  formContainer: {
    backgroundColor: "#f2b8e2",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  label: { color: "#3b005a", fontWeight: "bold" },
  input: {
    backgroundColor: "#ffe6f7",
    borderRadius: 10,
    padding: 8,
    marginBottom: 8,
  },
  addBtn: {
    backgroundColor: "#d3248b",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addBtnText: { color: "white", fontWeight: "bold" },
  nextPageBtn: {
    backgroundColor: "#d3248b",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  nextPageText: { color: "black", fontWeight: "bold" },
  welcome: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#3b005a",
    marginBottom: 10,
  },
});
