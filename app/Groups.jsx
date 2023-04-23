import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Groups = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [initialData, setInitialData] = useState({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchUser = async () => {
    const url =
      "https://projeto-area-verde-default-rtdb.firebaseio.com/db.json";
    const response = await axios.get(url);

    setCoursesData(response.data);
    setInitialData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    if (input === "") {
      setCoursesData(initialData);
    } else {
      setCoursesData(initialData);
      const word = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const results = coursesData.filter((course) =>
        String(course.TURMA)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(word)
      );
      setCoursesData(results);
    }
  }, [input]);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Insira o nome da disciplina:</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: Álgebra Linear"
            value={input}
            onChangeText={(event) => {
              setInput(event);
            }}
          />
          <View style={styles.container2}>
            <View style={styles.row}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                  Disciplina
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                  Professor
                </Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: height * 0.02, fontWeight: "bold" }}>
                  Turno
                </Text>
              </View>
            </View>
            <View />
            <View style={styles.container3}>
              {isLoading && <ActivityIndicator size="small" color="#13BB5B" />}
              {!isLoading &&
                coursesData.map((data) => (
                  <View key={data["CÓDIGO DE TURMA"]}>
                    <View style={styles.line}></View>
                    <View style={styles.row}>
                      <Text style={{ flex: 3, fontSize: height * 0.02 }}>
                        {data.TURMA.slice(0, data.TURMA.indexOf("-"))}
                      </Text>
                      <Text
                        style={{
                          flex: 3,
                          fontSize: height * 0.02,
                          textTransform: "capitalize",
                        }}
                      >
                        {data["DOCENTE TEORIA"]}
                      </Text>
                      <Text style={{ flex: 2, fontSize: height * 0.02 }}>
                        {data.TURMA.slice(data.TURMA.indexOf("-"))
                          .replaceAll("-", "")
                          .replace("(São Bernardo do Campo)", " SBC")
                          .replace("(Santo André)", " SA")
                          .replace("TURMA MINISTRADA EM INGLÊS", "")}
                      </Text>
                    </View>
                    <Text style={styles.button}>link</Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Groups;

const styles = StyleSheet.create({
  title: {
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 20,
    marginTop: 20,
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    gap: width * 0.03,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    gap: 10,
  },
  row: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: width * 0.03,
  },
  input: {
    fontSize: height * 0.02,
    textAlign: "center",
    alignItems: "center",
    width: width * 0.6,
    padding: width * 0.02,
    backgroundColor: "#C3E182",
    borderRadius: 20,
  },
  button: {
    fontSize: height * 0.02,
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    padding: width * 0.015,
    backgroundColor: "#ffffff",
    color: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
  },
  line: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
    marginBottom: height * 0.02,
  },
});
