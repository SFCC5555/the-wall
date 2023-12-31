import { useSelector } from "react-redux";
import { MessageModal } from "./components/MessageModal";
import { NavBar } from "./components/NavBar";
import { Wall } from "./components/Wall";

function App() {
  const messageModalStatus = useSelector((state) => state.messageModalStatus);

  return (
    <>
      <NavBar />
      <Wall />
      {messageModalStatus && <MessageModal />}
    </>
  );
}

export default App;
