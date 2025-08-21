import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/A_Menu";
import Trangchu from "./Components/B_Trangchu";
import Gioithieu from "./Components/C_Gioithieu";
import Chiendich from "./Components/D_Chiendich";
import Quy from "./Components/E_Quy";
import DangNhap from "./Components/F_DangNhap";

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