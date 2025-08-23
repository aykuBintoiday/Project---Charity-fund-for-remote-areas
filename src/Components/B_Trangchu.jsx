import { useNavigate } from "react-router-dom";
import TrangTri1 from "../assets/img/TrangChu_TrangTri_1.png"
import TrangTri2 from "../assets/img/TrangChu_TrangTri_2.png"
import TrangTri4 from "../assets/img/TrangChu_TrangTri_4.png"
import '../Design/Trangchu.scss';

function Trangchu() {
  const navigate = useNavigate();

    return <>
    {/* Trang 1 */}
    <div className="Trang_1">
      <img className="TrangTri_1" src={TrangTri1} alt="" />
      <img className="TrangTri_2" src={TrangTri2} alt="" />
      <img className="TrangTri_4" src={TrangTri4} alt="" />

    <svg class="TrangTri_3" viewBox="0 0 1440 340" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#0b4428"
        d="M0,265
         C240,335 480,345 720,315
         C960,290 1200,270 1440,282
         L1440,340 L0,340 Z"/>

      <path fill="none"
        stroke="#86a84e"
        stroke-width="18"
        d="M0,265 C240,335 480,345 720,315
         C960,290 1200,270 1440,282"/>
    </svg>
      <button className="Trang1_button" onClick={() => navigate("/gioithieu")}>Tìm Hiểu Thêm</button>
      <p className="Trang1_chuchung Trang1_chu1 Trang1_chuchungchung">QUỸ HỖ TRỢ</p>
      <p className="Trang1_chu2 Trang1_chuchungchung">TRẺ EM</p>
      <p className="Trang1_chuchung Trang1_chu3 Trang1_chuchungchung">VÙNG SÂU VÙNG XA</p>
      <p className="Trang1_chu4">Vùng sâu vùng xa còn nhiều thiếu thốn, đường đi khó khăn, <br /> 
      đời sống vất vả. Nhưng nơi ấy sáng lên nghị lực, tình người <br /> 
      chân chất và khát vọng vươn lên, nhắc nhở chúng ta chung <br />
      tay góp sức để san sẻ yêu thương, xây dựng tương lai.</p>
    </div>

    {/* Trang 2 */}
    <div className="Trang_2">

    </div>
    
    {/* Trang 3 */}
    <div className="Trang_3">

    </div>

    {/* Trang 4 */}
    <div className="Trang_4">

    </div>
    </>
}
export default Trangchu;