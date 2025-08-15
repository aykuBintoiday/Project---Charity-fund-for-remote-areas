import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Product/A_Menu"
import Trangchu from "./Product/B_Trangchu"
import Gioithieu from "./Product/C_Gioithieu"
import Chiendich from "./Product/D_Chiendich"
import Quy from "./Product/E_Quy"
import DangNhap from "./Product/F_DangNhap"


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/trangchu" element={<Trangchu/>} />
        <Route path="/gioithieu" element={<Gioithieu/>} />
        <Route path="/chiendich" element={<Chiendich/>} />
        <Route path="/quy" element={<Quy/>} />
        <Route path="/dangnhap" element={<DangNhap/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
