import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import logo from "../assets/area-verde.png";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Notícias</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Image style={styles.image} source={logo} />
          <Text
            style={{
              fontSize: height * 0.02,
              flex: 2.5,
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            Órgão publicador da matéria: Título da matéria
            {"\n"}
            {"\n"}
          </Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={logo} />
          <Text
            style={{
              fontSize: height * 0.02,
              flex: 2.5,
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            UFABC: Comunicado Oficial sobre o reajuste de bolsas acadêmicas
            {"\n"}
            {"\n"}
          </Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={logo} />
          <Text
            style={{
              fontSize: height * 0.02,
              flex: 2.5,
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            CAAP: Divulgação dos horários dos treinos abertos no campus de SA
            {"\n"}
            {"\n"}
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Eventos</Text>
        <View style={styles.line}></View>
        <View style={styles.container3}>
          <Text style={styles.text}>
            Abreviação dia da semana, data {"\n"}
            Titulo do evento{"\n"}
            Local, horário
          </Text>
          <Text style={styles.text}>
            Seg, 06/03{"\n"}
            Seminário das engenharias{"\n"}
            Piso Vermelho (Bloco A, SA), 10h ás 21h
          </Text>
          <Text style={styles.text}>
            Qui, 09/03{"\n"}
            Início de venda de ingressos Bordoada{"\n"}
            Site CAAP, 08h ás 14h
          </Text>
        </View>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 20,
    marginTop: 50,
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
  },
  row: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: width * 0.03,
  },
  title: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#13BB5B",
    alignItems: "center",
  },
  text: {
    fontSize: height * 0.02,
    alignItems: "center",
  },
  line: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
  },
  image: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    resizeMode: "contain",
  },
  container3: {
    gap: width * 0.02,
  },
});
