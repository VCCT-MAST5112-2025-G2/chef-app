import { View, Text } from "react-native";
import { styles } from "../styles";

export default function RecipesScreen() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Recipes</Text>
      <Text style={styles.centerText}>
        View and explore different menu items created by the chef.
      </Text>
    </View>
  );
}
