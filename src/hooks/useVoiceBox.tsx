import { useState } from "react";
import { tabsData } from "../constants/tabsData"; 
export const useVoiceBox = () => {
  const [value, setValue] = useState(2);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return { value, handleChange, tabsData };
};
