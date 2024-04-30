import { Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

export default function ComponentImgBackground() {
  const imagem = {
    uri: "https://static.vecteezy.com/ti/vetor-gratis/t2/7207818-futurista-tecnologico-grade-fundo-digital-futurista-ciber-espaco-design-cyberpunk-tecnologia-realidade-virtual-ficcao-cientifica-matriz-ciencia-luz-perspectiva-papel-de-parede-ilustracaoial-gratis-vetor.jpg",
  };
  return (
    <View>
      <ImageBackground
        source={imagem}
        resizeMode="cover"
        style={styles.imagem}
      ></ImageBackground>
    </View>
  );
}
