import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { MenuItem } from "../../App";

type MenuCardProps = {
  item: MenuItem;
  removeItem: (id: string) => void;
};

export default function MenuCard({ item, removeItem }: MenuCardProps) {
  return (
    <View style={styles.menuCard}>
      <Text style={styles.menuTitle}>{item.name}</Text>
      <Text style={styles.menuText}>{item.desc}</Text>
      <Text style={styles.menuText}>Course: {item.course}</Text>
      <Text style={styles.menuText}>Price: ${item.price}</Text>

      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.removeBtnText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}
