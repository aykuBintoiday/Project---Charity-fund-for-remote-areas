import TrangTri1 from "../assets/img/TrangChu_TrangTri_1.png"
import TrangTri2 from "../assets/img/TrangChu_TrangTri_2.png"
import TrangTri4 from "../assets/img/TrangChu_TrangTri_4.png"
import '../Design/Trangchu.scss';

function Trangchu() {
    return <>
    {/* Trang 1 */}
    <div className="Trang_1">
      <img className="TrangTri_1" src={TrangTri1} alt="" />
      <img className="TrangTri_2" src={TrangTri2} alt="" />
      <img className="TrangTri_4" src={TrangTri4} alt="" />

      <svg class="TrangTri_3" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path class="wave wave--light"
        d="M0,220
          C240,280 480,300 720,280
           C960,260 1200,220 1440,240
          L1440,320 L0,320 Z"/>
      <path class="wave wave--dark"
        d="M0,260
          C240,340 480,340 720,310
           C960,280 1200,260 1440,270
           L1440,320 L0,320 Z"/>
      </svg>
      <p className="Trang1_chuchung Trang1_chu1 Trang1_chuchungchung">QUỸ HỖ TRỢ</p>
      <p className="Trang1_chu2 Trang1_chuchungchung">TRẺ EM</p>
      <p className="Trang1_chuchung Trang1_chu3 Trang1_chuchungchung">VÙNG SÂU VÙNG XA</p>
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