import { useSelector } from "react-redux";

const useTheme = () => {
  const { light, dark, isLightTheme } = useSelector((state) => state.themes);
  const theme = isLightTheme ? light : dark;
  return theme;
};

export default useTheme;
