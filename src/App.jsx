import { useSelector } from "react-redux"
import { MessageModal } from "./components/MessageModal"
import { NavBar } from "./components/NavBar"
import { Wall } from "./components/Wall"

function App() {

  const message = useSelector(state=>state.message);

  return (
    <>
      <NavBar />
      <Wall />
      {message&&<MessageModal />}
    </>
  )
}

export default App
