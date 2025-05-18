import { Stack } from "@mui/material";
import LanguageButton from "../UI/LanguageButton";
import VoiceOptionsTabs from "./Tabs/VoiceOptionsTabs";
import TabContent from "../TabContent/TabContent";
import { useVoiceBox } from "../../hooks/useVoiceBox";

const VoiceBox: React.FC = () => {
  const { value, handleChange } = useVoiceBox();

  return (
    <Stack mt={4} alignItems='center'>
          <VoiceOptionsTabs value={value} onChange={handleChange} />
          <TabContent value={value} />

         <LanguageButton label=":زبان گفتار" />

    </Stack>
  );
};

export default VoiceBox;
