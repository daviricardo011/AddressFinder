import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import axios from "axios";
import { Container, SecondaryContainer, ImageBackground } from "./styles";
import { AddressLine } from "./components/AddressLine";
import { InputText } from "./components/Input";

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

export default function App() {
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
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={require("./assets/city.jpg")}>
        <SecondaryContainer>
          <InputText
            label="Digite o CEP"
            onChangeText={setCEP}
            value={CEP}
            placeholder="Digite o CEP aqui"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
          />
          <AddressLine label={"Logradouro"} text={address?.logradouro || "-"} />
          <AddressLine label={"Bairro"} text={address?.bairro || "-"} />
          <AddressLine
            label={"Complemento"}
            text={address?.complemento || "-"}
          />
          <AddressLine label={"Cidade"} text={address?.localidade || "-"} />
          <AddressLine label={"Unidade Federativa"} text={address?.uf || "-"} />
        </SecondaryContainer>
      </ImageBackground>
    </Container>
  );
}
