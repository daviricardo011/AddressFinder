import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

export const SecondaryContainer = styled.View`
  background-color: #21262a;
  padding: 20px;
`;

export const InputContainer = styled.View`
  align-items: center;
  margin-bottom: 18px;
`;

export const InputLabel = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  border-color: #cccbcb;
`;

export const ResponseTextContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const TitleText = styled.Text`
  text-transform: uppercase;
  color: #4674cb;
  font-weight: bold;
  font-size: 12px;
`;

export const ResponseText = styled.Text`
  color: #cccbcb;
  font-size: 16px;
`;
