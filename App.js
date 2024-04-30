import { StyleSheet } from "react-native";
import ComponentImgBackground from "./Components/ImgBackground";

export default function App() {
  return <ComponentImgBackground />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
