import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Menu.scss";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>

      <nav className="navbar">
        {/* Nút 3 sọc */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menu xổ xuống */}
        <ul className={`menu ${isOpen ? "show" : ""}`}>
          <li className="chu_menu"><Link to="/trangchu">Trang Chủ</Link></li>
          <li className="chu_menu"><Link to="/gioithieu">Giới Thiệu</Link></li>
          <li className="chu_menu"><Link to="/chiendich">Chiến Dịch</Link></li>
          <li className="chu_menu"><Link to="/quy">Quỹ</Link></li>
          <li className="chu_menu"><Link to="/dangnhap">Đăng Nhập</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;