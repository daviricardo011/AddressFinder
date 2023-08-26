import { TextInputProps } from "react-native";
import { Input, InputContainer, InputLabel } from "./styles";

interface Props extends TextInputProps {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input {...props} />
    </InputContainer>
  );
};
