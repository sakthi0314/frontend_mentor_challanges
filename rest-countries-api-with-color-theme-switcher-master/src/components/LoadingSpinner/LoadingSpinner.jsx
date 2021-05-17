import { PropagateLoader } from "react-spinners";
import Theme from "../../theme/Theme";
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  const theme = Theme();
  const { isLoading } = useSelector((state) => state.countries);

  return (
    <div
      className='sweet-loading'
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <PropagateLoader color={theme.text} loading={isLoading} />
    </div>
  );
};

export default LoadingSpinner;
