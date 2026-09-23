import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllWords from "./screens/AllWords";
import AddWord from "./screens/AddWord";
import EditWord from "./screens/EditWord";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="AllWords" component={AllWords} options={{ title: "My words" }} />
        <Stack.Screen name="AddWord" component={AddWord} options={{ title: "Adding word" }} />
        <Stack.Screen
          name="EditWord"
          component={EditWord}
          options={({ route }) => ({
            title: `Editing word "${route.params?.wordData?.word ?? ""}"`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
