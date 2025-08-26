import { Outlet } from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Menu />
      {/* Nơi render các route con */}
      <Outlet />
    </>
  );
}

export default App;