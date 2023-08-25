import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

interface IAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const REACT_APP_GOOGLE_API_KEY = "CHAVE-API";

export default function App() {
  const [text, onChangeText] = useState("Useless Text");
  const [CEP, setCEP] = useState("");
  const [address, setAddress] = useState<IAddress>();
  useEffect(() => {
    const searchCEP = async () => {
      if (CEP.length === 8) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${CEP}/json/`
          );
          console.log(response.data);
          setAddress(response.data);
        } catch (e) {
          console.error(e);
        }
      }
    };
    searchCEP();
  }, [CEP]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.secondaryContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Digite o CEP</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCEP}
            value={CEP}
            placeholder="Digite o CEP aqui"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.responseTextContainer}>
          <Text style={styles.responseText}>{address?.logradouro || "-"}</Text>
          <Text style={styles.titleText}>Logradouro</Text>
        </View>
        <View style={styles.responseTextContainer}>
          <Text style={styles.responseText}>{address?.bairro || "-"}</Text>
          <Text style={styles.titleText}>Bairro</Text>
        </View>
        <View style={styles.responseTextContainer}>
          <Text style={styles.responseText}>{address?.complemento || "-"}</Text>
          <Text style={styles.titleText}>Complemento</Text>
        </View>
        <View style={styles.responseTextContainer}>
          <Text style={styles.responseText}>{address?.localidade || "-"}</Text>
          <Text style={styles.titleText}>Cidade</Text>
        </View>
        <View style={styles.responseTextContainer}>
          <Text style={styles.responseText}>{address?.uf || "-"}</Text>
          <Text style={styles.titleText}>Unidade Federativa</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13141a",
    justifyContent: "flex-end",
  },

  secondaryContainer: {
    flex: 0.4,
    backgroundColor: "#2A2E3B",
    padding: 20,
  },

  inputContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  inputText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#cccbcb",
    color: "#cccbcb",
  },
  responseTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
  },
  titleText: {
    textTransform: "uppercase",
    color: "#4674CB",
    fontWeight: "bold",
    fontSize: 12,
  },
  responseText: {
    color: "#cccbcb",
    fontSize: 16,
  },
});
