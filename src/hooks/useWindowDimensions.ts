import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState(Dimensions.get("window"));

  useEffect(() => {
    const onChange = ({ window }) => setWindowSize(window);

    const subscription = Dimensions.addEventListener("change", onChange);

    return () => subscription?.remove();
  }, []);

  return windowSize;
};

export default useWindowDimensions;
