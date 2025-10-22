import { View, Text } from "react-native";
import { styles } from "../styles";

export default function ChefsScreen() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Chefs</Text>
      <Text style={styles.centerText}>
        Meet the talented chefs behind the dishes
      </Text>
    </View>
  );
}
