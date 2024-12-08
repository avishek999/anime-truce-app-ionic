import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router";

const BackButton = () => {
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };
  return (
    <IoArrowBack size={30} className="ml-5 mt-4" onClick={handleBackButton} />
  );
};

export default BackButton;
