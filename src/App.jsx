import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Trangchu from "./Components/Home";
import Gioithieu from "./Components/Introduce";
import Chiendich from "./Components/Campaign";
import Quy from "./Components/Budget";
import DangNhap from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Trangchu />} /> {/* Trang mặc định */}
        <Route path="/trangchu" element={<Trangchu />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/chiendich" element={<Chiendich />} />
        <Route path="/quy" element={<Quy />} />
        <Route path="/dangnhap" element={<DangNhap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;