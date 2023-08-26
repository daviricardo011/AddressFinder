import { ResponseText, ResponseTextContainer, TitleText } from "./styles";

interface Props {
  label: string;
  text: string;
}

export const AddressLine = ({ label, text }: Props) => {
  return (
    <ResponseTextContainer>
      <ResponseText>{text}</ResponseText>
      <TitleText>{label}</TitleText>
    </ResponseTextContainer>
  );
};
