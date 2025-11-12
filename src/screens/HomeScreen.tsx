import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { MenuItem } from "../../App";
import MenuCard from "../../Menu";

type HomeScreenProps = {
  chefName: string;
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export default function HomeScreen({ chefName, menu, setMenu }: HomeScreenProps) {
  function removeItem(id: string) {
    setMenu(menu.filter((m) => m.id !== id));
  }

  return (
    <View>
      <Text style={styles.welcome}>Welcome, {chefName}!</Text>

      {menu.length > 0 ? (
        menu.map((item) => (
          <MenuCard key={item.id} item={item} removeItem={removeItem} />
        ))
      ) : (
        <Text style={styles.centerText}>No dishes yet. Add some!</Text>
      )}

      <TouchableOpacity style={styles.nextPageBtn}>
        <Text style={styles.nextPageText}>NEXT PAGE</Text>
      </TouchableOpacity>
    </View>
  );
}
