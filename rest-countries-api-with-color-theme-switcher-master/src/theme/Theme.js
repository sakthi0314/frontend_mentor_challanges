import { useSelector } from "react-redux";

const Theme = () => {
  const { isLightTheme, light, dark } = useSelector((state) => state.theme);
  const theme = isLightTheme ? light : dark;
  return theme;
};

export default Theme;
