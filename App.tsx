import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import axios from "axios";
import {
  Container,
  SecondaryContainer,
  InputContainer,
  InputLabel,
  Input,
  ResponseTextContainer,
  ResponseText,
  TitleText,
  ImageBackground,
} from "./components";

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
          <InputContainer>
            <InputLabel>Digite o CEP</InputLabel>
            <Input
              onChangeText={setCEP}
              value={CEP}
              placeholder="Digite o CEP aqui"
              placeholderTextColor="#a0a0a0"
              keyboardType="numeric"
            />
          </InputContainer>

          <ResponseTextContainer>
            <ResponseText>{address?.logradouro || "-"}</ResponseText>
            <TitleText>Logradouro</TitleText>
          </ResponseTextContainer>
          <ResponseTextContainer>
            <ResponseText>{address?.bairro || "-"}</ResponseText>
            <TitleText>Bairro</TitleText>
          </ResponseTextContainer>
          <ResponseTextContainer>
            <ResponseText>{address?.complemento || "-"}</ResponseText>
            <TitleText>Complemento</TitleText>
          </ResponseTextContainer>
          <ResponseTextContainer>
            <ResponseText>{address?.localidade || "-"}</ResponseText>
            <TitleText>Cidade</TitleText>
          </ResponseTextContainer>
          <ResponseTextContainer>
            <ResponseText>{address?.uf || "-"}</ResponseText>
            <TitleText>Unidade Federativa</TitleText>
          </ResponseTextContainer>
        </SecondaryContainer>
      </ImageBackground>
    </Container>
  );
}
