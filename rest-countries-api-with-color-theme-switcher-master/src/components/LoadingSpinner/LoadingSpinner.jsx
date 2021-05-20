import React from "react";
import { SyncLoader } from "react-spinners";
import useTheme from "../../customHooks/useTheme";

const LoadingSpinner = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <SyncLoader color={theme.text} loading={true} size={15} margin={2} />
    </div>
  );
};

export default LoadingSpinner;
